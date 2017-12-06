# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "nokogiri"
require "open-uri"
require "faker"


### GET CATEGORIES ###

def get_meetup_categories(url)
  html = Nokogiri::HTML(open(url))
  categories_grid = html.at_css('.gridList').children
  categories = []
  categories_grid.children.each do |child|
    next if categories.length == 12
    hash = {}
    hash['name'] = child.content.strip unless child.content.strip == ''
    hash['url'] = child['href'] unless child['href'].nil?
    categories << hash unless hash == {}
  end
  return categories
end

homepage = "https://www.meetup.com/"

meetup_categories = get_meetup_categories(homepage)



### CREATE CATEGORIES ###

Category.destroy_all

meetup_categories.each do |category|
  Category.create({
    name: category['name'],
    img_url: category['url']
    })
end



### CREATE 'FAKER' USERS ###

User.destroy_all
Subscription.destroy_all

zip_codes = [94103, 94132, 94608, 94901, 94602, 94505]

100.times do
  first = Faker::Name.first_name
  last = Faker::Name.last_name

  user = User.create({
    name: "#{first} #{last}",
    email: "#{first[0].downcase}.#{last.downcase}#{rand(100)}@email.com",
    password: "password",
    zip_code: zip_codes[rand(6)]
  })

  ### CREATE SUBSCRIPTIONS ###

  4.times do # every user gets 4 subscriptions

    category = Category.all[rand(Category.all.length)] # choose random categories

    unless user.interests.include?(category)

      Subscription.create({
        user: user,
        category: category
      })

    end
  end
end



### METHDODS FOR COLLECTING GROUP AND EVENT DATA ###

def get_groups_of_category(category)
  begin
    html = Nokogiri::HTML(open(category['img_url']))
  rescue OpenURI::HTTPError => error
    puts error
    retry
  end

  group_list_items = html.css('.j-groupCard-list').children
  groups = []

  group_list_items.children.each do |child|
    next if groups.length == 10
    unless child.content.gsub(/\s+/, "") == ''
      hash = {}
      hash['name'] = child.first_element_child.content unless child.first_element_child.content[0] == "\n"
      hash['url'] = child.first_element_child['href']
      groups << hash if hash['name'] # && Group.where("name = '#{hash['name']}'").empty?
    end
  end

  return groups
end

def get_group_info(group_hash) ## calls a chain of 4 methods ##
  begin
    html = Nokogiri::HTML(open(group_hash['url']))
  rescue OpenURI::HTTPError => error
    puts error
    retry
  end

  banner_style = html.at_css('.groupHomeHeader-banner')['style']
  group_hash['img_url'] = banner_style[(banner_style.index('(') + 1)...-1]

  group_hash['location'] = html.at_css('.groupHomeHeader-groupInfo').at_css('.text--bold').content

  description_div = html.at_css('.group-description')
  group_hash['description'] = description_div.content

  group_hash = get_events_of_group(group_hash) #HERE %

  return group_hash
end

def get_events_of_group(group_hash) #HERE %
  begin
    html = Nokogiri::HTML(open(group_hash['url'] + 'events'))
  rescue OpenURI::HTTPError => error
    puts error
    retry
  end

  script = find_script(html) #HERE @

  event_urls = get_event_url_extensions(script) #HERE $

  group_hash['events'] = []

  event_urls.each do |url|
    group_hash['events'] << {'url' => (group_hash['url'] + 'events/' + url)}
  end

  return group_hash
end

def find_script(root_node) #HERE @
  node = root_node.last_element_child
  script = nil

  node.children.each do |child|
    script = child if child.to_s[0..7] == '<script>'
  end

  script ? script : find_script(node)
end

def get_event_url_extensions(script) #HERE $
  event_url_extensions = []

  arr = script.to_s.split("/events/")

  arr.each_with_index do |str, idx|
    next if idx == 0 || !str[0].between?('0', '9') || event_url_extensions.length == 3
    idx2 = 0
    loop do
      if str[idx2] == '/'
        event_url_extensions << str[0..idx2] unless idx2 >= 10
        break
      end
      idx2 += 1
    end
  end
  return event_url_extensions
end

def get_event_info(event_hash)
  too_many = 0
  begin
    html = Nokogiri::HTML(open(event_hash['url']))
  rescue OpenURI::HTTPError => error
    puts error
    puts event_hash['url']
    too_many == 10 ? return event_hash : retry
  end

  event_hash['name'] = html.at_css('.pageHead-headline').content

  html.at_css('.eventTimeDisplay-startDate').children.each do |child|
    value = child.content.strip
    unless value == ''
      event_hash['date'] = value unless event_hash['date']
      event_hash['time'] = value
    end
  end

  if html.at_css('.venueDisplay-venue-noVenue') ||
    html.at_css('.venueDisplay-venue-locationHidden')
    event_hash['address'] = "#{Faker::Address.street_address} · #{Group.last.location}"
  else
    html.at_css('.venueDisplay').child.children.each do |child|
      value = child.content.strip
      unless value == ''
        event_hash['venue'] = value unless event_hash['venue']
        unless event_hash['address'] || value == event_hash['venue']
          event_hash['address'] = value
        end
      end
    end
  end


  # description = html.at_css('.event-description')

  if html.at_css('.event-description')
    event_hash['description'] = html.at_css('.event-description').content
  else
    event_hash['description'] = "[No description provided]"
  end

  return event_hash
end

#^^ METHDODS FOR COLLECTING GROUP AND EVENT DATA ^^#



Group.destroy_all
Membership.destroy_all
Event.destroy_all
Rsvp.destroy_all

### GET GROUPS ###

Category.all.each do |category|

  puts category.name # for troubleshooting

  category_groups = get_groups_of_category(category)

  category_groups.each do |group|

    group = get_group_info(group)
    subscribers = category.subscribers.to_a
    organizer = subscribers.rotate(rand(subscribers.length)).shift
    members = []
    fraction_of_subscription_size = rand(4) + 2

    while members.length < (subscribers.length / fraction_of_subscription_size)
      members << subscribers.rotate(rand(subscribers.length)).shift
    end

    ### CREATE GROOUPS ###

    new_group = Group.create!({
      name: group['name'],
      description: group['description'],
      location: group['location'],
      img_url: group['img_url'],
      organizer_id: organizer.id,
      category_id: category.id
      })

    puts "=> #{new_group.name}" # for troubleshooting

    ### CREATE MEMBERSHIPS ###

    members.each do |member|
      Membership.create!({
        user: member,
        group: new_group
        })
    end

    ### GET EVENTS ###

    group['events'].each do |event|

      event = get_event_info(event)
      next unless event['name']
      host = members.rotate(rand(members.length)).shift
      attendees = []
      fraction_of_membership_size = rand(3) + 2

      while attendees.length < (members.length / fraction_of_membership_size)
        attendees << members.rotate(rand(members.length)).shift
      end

      ### CREATE EVENTS ###

      new_event = Event.create!({
        name: event['name'],
        description: event['description'],
        venue: event['venue'],
        address: event['address'],
        date: Date.parse(event['date']),
        time: event['time'],
        group_id: new_group.id,
        host_id: host.id
        })

      puts "==> #{new_event.name}" # for troubleshooting

      ### CREATE RSVPs ###

      attendees.each do |attendee|
        Rsvp.create!({
          user: attendee,
          event: new_event
        })
      end

    end
  end
end
