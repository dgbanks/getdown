# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "Nokogiri"
require "open-uri"


### CATEGORIES

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

# Category.destroy_all
#
# meetup_categories.each do |category|
#   Category.create({
#     name: category['name']
#     })
# end

Category.create({
  name: 'Other'
  })


### USERS

User.destroy_all

david = User.create({
  name: 'david',
  email: 'email1',
  password: 'password',
  zip_code: 94103
  })

guest = User.create({
  name: 'guest',
  email: 'email2',
  password: 'password',
  zip_code: 94577
  })

andres = User.create({
  name: 'andres',
  email: 'email3',
  password: 'password',
  zip_code: 94103
  })

peter = User.create({
  name: 'peter',
  email: 'email4',
  password: 'password',
  zip_code: 94103
  })

ryan = User.create({
  name: 'ryan',
  email: 'email5',
  password: 'password',
  zip_code: 22031
  })

aj = User.create({
  name: 'aj',
  email: 'email6',
  password: 'password',
  zip_code: 94103
  })

rachel = User.create({
  name: 'rachel',
  email: 'email7',
  password: 'password',
  zip_code: 94103
  })

lisa = User.create({
  name: 'lisa',
  email: 'email8',
  password: 'password',
  zip_code: 94103
  })

jerry = User.create({
  name: 'jerry',
  email: 'email9',
  password: 'password',
  zip_code: 94105
  })

priya = User.create({
  name: 'priya',
  email: 'email10',
  password: 'password',
  zip_code: 94105
  })

alex = User.create({
  name: 'alex',
  email: 'email11',
  password: 'password',
  zip_code: 94105
  })

tommy = User.create({
  name: 'tommy',
  email: 'email12',
  password: 'password',
  zip_code: 22030
  })

joey = User.create({
  name: 'joey',
  email: 'email13',
  password: 'password',
  zip_code: 22030
  })

johnny = User.create({
  name: 'johnny',
  email: 'email14',
  password: 'password',
  zip_code: 22030
  })

alison = User.create({
  name: 'alison',
  email: 'email15',
  password: 'password',
  zip_code: 22030
  })

parsely = User.create({
  name: 'parsely',
  email: 'email16',
  password: 'password',
  zip_code: 78214
  })

kate = User.create({
  name: 'kate',
  email: 'email17',
  password: 'password',
  zip_code: 78214
  })

### GROUPS ###

Group.destroy_all

bookclub = Group.create({
  name: 'Book Club',
  description: 'We read a book every month and then talk about it!',
  zip_code: david.zip_code,
  organizer_id: david.id,
  category_id: Category.all.first
  })

betterbookclub = Group.create({
  name: 'Better Book Club',
  description: 'We read two books each month and then talk about it with beer and snacks',
  zip_code: andres.zip_code,
  organizer_id: andres.id,
  category_id: Category.all.first
  })

rails = Group.create({
  name: 'Ruby on Rails Developers',
  description: 'We get together to collaborate on Rails projects',
  zip_code: peter.zip_code,
  organizer_id: peter.id,
  category_id: Category.all.first
  })

react = Group.create({
  name: 'React Developers',
  description: 'We get together every month to share and collaborate our React projects',
  zip_code: ryan.zip_code,
  organizer_id: ryan.id,
  category_id: Category.all.first
  })

dog_walk = Group.create({
  name: 'Dog Walking',
  description: 'We\'re taking weekend dog-walks, all are invited. BYO dog.',
  zip_code: kate.zip_code,
  organizer_id: kate.id,
  category_id: Category.all.first
  })

climbers = Group.create({
  name: 'Bay Area Climbing',
  description: 'All rock climbing entusiasts are welcome. Both indoor and outdoor events to come',
  zip_code: ryan.zip_code,
  organizer_id: ryan.id,
  category_id: Category.all.first
  })

wings = Group.create({
  name: 'Wings Fanatics',
  description: 'NOT the band. Please don\'t even. Our group is on a mission to find the best wings in the city. Join us.',
  zip_code: aj.zip_code,
  organizer_id: aj.id,
  category_id: Category.all.first
  })

yoyo = Group.create({
  name: 'Yoyo-ers',
  description: 'Gotta practice our yoyo skills. Nationals in Chico this year! Stay tuned for regular meetings/practices',
  zip_code: andres.zip_code,
  organizer_id: andres.id,
  category_id: Category.all.first
  })

runners = Group.create({
  name: 'Runners and Joggers',
  description: 'Group runs three times a week! All speeds and abilities welcome.',
  zip_code: david.zip_code,
  organizer_id: david.id,
  category_id: Category.all.first
  })

pokemon = Group.create({
  name: 'Pokemon Posse',
  description: 'Gotta catch em all',
  zip_code: jerry.zip_code,
  organizer_id: jerry.id,
  category_id: Category.all.first
  })

music = Group.create({
  name: 'Area Musicians',
  description: 'We get together once a week to play some sweet tunes! Must be an excellent musician to join.',
  zip_code: johnny.zip_code,
  organizer_id: johnny.id,
  category_id: Category.all.first
  })

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
