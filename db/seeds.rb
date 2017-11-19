# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "Nokogiri"
require "open-uri"


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

# Category.destroy_all
#
# meetup_categories.each do |category|
#   Category.create({ name: category['name'] })
# end

Category.create({ name: 'Other' })

### CREATE FAKER USERS ###

User.destroy_all

zip_codes = [94103, 94132, 94608, 94901, 94602, 94505]
fake_users = []

50.times {
  first = Faker::Name.first_name
  last = Faker::Name.last_name

  fake_users << User.create({
    name: "#{first} #{last}",
    email: "#{first[0].downcase}.#{last.downcase}#{rand(100)}@email.com",
    password: "password",
    zip_code: zip_codes[rand(6)]
    })
}

### CREATE SUBSCRIPTIONS ###

fake_users.each do |user|

  rand(Category.all.length).times do
    Subscription.create({
      user: user,
      category: Category.all[rand(Category.all.length)]
      })
  end

end

### GET GROUPS ###

def get_groups_of_category(category)
  html = Nokogiri::HTML(open(category['url']))
  group_list_items = html.at_css('.j-groupCard-list').children

  groups = []

  group_list_items.children.each do |child|
    next if groups.length == 10
    unless child.content.gsub(/\s+/, "") == ''
      hash = {}
      hash['name'] = child.first_element_child.content unless child.first_element_child.content[0] == "\n"
      hash['url'] = child.first_element_child['href']
      groups << hash if hash['name']
    end
  end

  return groups
end

# all_groups = []

meetup_categories.each do |category|

  category_groups = get_groups_of_category(category)

  category_groups.each do |group|

    subscribers = category.subscribers

    organizer = subscribers.rotate(rand(subscribers.length)).shift

    members = []

    while members.length <= (subscribers.length / rand(2, 4))
      members << subscribers[rand(subscribers.length)]
    end

    Group.destroy_all

    Group.create({
      name:
      description:
      zip_code:
      organizer_id:
      category_id:
      })

    members.each do |member|

      Membership.create({ user: member, group: group })

    end

    host = members.rotate(rand(members.length)).shift

    attendees = []




end

### CREATE GROUPS ###



### EVENTS

Event.destroy_all

bookclub_meeting = Event.create({
  name: 'October Meeting',
  description: 'Come ready to talk about 1984!',
  location: bookclub.zip_code,
  date: Date.parse('2017-10-10'),
  time: Time.parse('12:00'),
  group_id: bookclub.id,
  host_id: bookclub.organizer_id
  })

betterbc_meeting = Event.create({
  name: 'End-of-October Meeting',
  description: 'Reading Lord of the Flies and eating an entire spit-roasted pig. Come help us out!',
  location: betterbookclub.zip_code,
  date: Date.parse('2017-10-25'),
  time: Time.parse('12:00'),
  group_id: betterbookclub.id,
  host_id: betterbookclub.organizer_id
  })

betterbc_meeting = Event.create({
  name: 'Beginning-of-October Meeting',
  description: 'Reading 1984 and drinking cheap gin!',
  location: betterbookclub.zip_code,
  date: Date.parse('2017-10-10'),
  time: Time.parse('12:00'),
  group_id: betterbookclub.id,
  host_id: betterbookclub.organizer_id
  })

code_sesh = Event.create({
  name: 'Coding Marathon',
  description: 'Staying up til 8AM coding forever to finish our projects',
  location: react.zip_code,
  date: Date.parse('2017-10-16'),
  time: Time.parse('12:00'),
  group_id: react.id,
  host_id: react.organizer_id
  })

walk = Event.create({
  name: 'Weekend Walk 10/8',
  description: 'Taking the dogs for a walk along the river. Only good dogs, please.',
  location: dog_walk.zip_code,
  date: Date.parse('2017-10-08'),
  time: Time.parse('08:00'),
  group_id: dog_walk.id,
  host_id: dog_walk.organizer_id
  })

walk2 = Event.create({
  name: 'Weekend Walk 10/15',
  description: 'Taking the dogs for a walk in the park. Only good dogs, please.',
  location: dog_walk.zip_code,
  date: Date.parse('2017-10-15'),
  time: Time.parse('08:00'),
  group_id: dog_walk.id,
  host_id: dog_walk.organizer_id
  })

jam = Event.create({
  name: 'Steely Dan Sesh',
  description: 'Get together to play all the Steely Dan songs you know in honor of Becker\'s recent passing.',
  location: music.zip_code,
  date: Date.parse('2017-10-05'),
  time: Time.parse('12:00'),
  group_id: music.id,
  host_id: music.organizer_id
  })

bookclub_meeting2 = Event.create({
  name: 'November Meeting',
  description: 'Come ready to talk about Farenheit 451!',
  location: bookclub.zip_code,
  date: Date.parse('2017-11-10'),
  time: Time.parse('12:00'),
  group_id: bookclub.id,
  host_id: bookclub.organizer_id
  })

pokedex = Event.create({
  name: 'Pokedex Party',
  description: 'Come help us figure out who everyone\'s spirit-pokemon is! We must get the entire cohort into the pokedex',
  location: pokemon.zip_code,
  date: Date.parse('2017-10-12'),
  time: Time.parse('12:00'),
  group_id: pokemon.id,
  host_id: pokemon.organizer_id
  })

wings1 = Event.create({
  name: 'Hot Sauce and Panko',
  description: 'Trying out the wings at Hot Sauce and Panko',
  location: wings.zip_code,
  date: Date.parse('2017-10-10'),
  time: Time.parse('12:00'),
  group_id: wings.id,
  host_id: wings.organizer_id
  })

wings2 = Event.create({
  name: 'Halal Wings Plus',
  description: 'Trying out the wings at Halal Wings Plus',
  location: wings.zip_code,
  date: Date.parse('2017-10-17'),
  time: Time.parse('12:00'),
  group_id: wings.id,
  host_id: wings.organizer_id
  })

weekly_run = Event.create({
  name: 'Weekly Run 10/10',
  description: 'Running down Folsom today!',
  location: runners.zip_code,
  date: Date.parse('2017-10-10'),
  time: Time.parse('12:00'),
  group_id: runners.id,
  host_id: runners.organizer_id
  })

weekly_run2 = Event.create({
  name: 'Weekly Run 10/17',
  description: 'Running down Howard today!',
  location: runners.zip_code,
  date: Date.parse('2017-10-17'),
  time: Time.parse('12:00'),
  group_id: runners.id,
  host_id: runners.organizer_id
  })

weekly_run3 = Event.create({
  name: 'Weekly Run 10/24',
  description: 'Running down Mission today!',
  location: runners.zip_code,
  date: Date.parse('2017-10-24'),
  time: Time.parse('12:00'),
  group_id: runners.id,
  host_id: runners.organizer_id
  })

yosemite = Event.create({
  name: 'Climbing in Yosemite',
  description: 'Let\'s go climbing in Yosemite. If we all pitch in for gas and camping and food we will have a blast!',
  location: climbers.zip_code,
  date: Date.parse('2017-11-01'),
  time: Time.parse('12:00'),
  group_id: climbers.id,
  host_id: climbers.organizer_id
  })
