# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




### USERS

User.destroy_all

david = User.create({
  name: 'david',
  email: 'email1',
  password: 'password',
  location: 94103
  })

guest = User.create({
  name: 'guest',
  email: 'email2',
  password: 'password',
  location: 94577
  })

someone = User.create({
  name: 'someone',
  email: 'email3',
  password: 'password',
  location: 94103
  })

user = User.create({
  name: 'user',
  email: 'email4',
  password: 'password',
  location: 94103
  })

mom = User.create({
  name: 'mom',
  email: 'email5',
  password: 'password',
  location: 22031
  })

ryan = User.create({
  name: 'ryan',
  email: 'email6',
  password: 'password',
  location: 94103
  })


### GROUPS

Group.destroy_all

bookclub = Group.create({
  name: 'Book Club',
  description: 'We read a book every week and then talk about it!',
  location: david.location,
  organizer_id: david.id
  })

betterbookclub = Group.create({
  name: 'Better Book Club',
  description: 'We read two books each week and then tal about it with beer and snacks',
  location: mom.location,
  organizer_id: mom.id
  })

rails = Group.create({
  name: 'Ruby on Rails Developers',
  description: 'We get together to collaborate on Rails projects',
  location: guest.location,
  organizer_id: guest.id
  })

react = Group.create({
  name: 'React Developers',
  description: 'We get together every month to share and collaborate our React projects',
  location: user.location,
  organizer_id: user.id
  })


### EVENTS

Event.destroy_all

bookclub_meeting = Event.create({
  name: 'September Meeting',
  description: 'Reading some Jane Eyre.... eyeroll am i right?',
  location: bookclub.location,
  date: Date.parse('2017-09-29'),
  time: 'Noon',
  group_id: bookclub.id,
  host_id: bookclub.organizer_id
  })

betterbc_meeting = Event.create({
  name: 'End-of-September Meeting',
  description: 'Reading some Wuthering Heights because we are just a little bit better than those other losers',
  location: betterbookclub.location,
  date: Date.parse('2017-10-01'),
  time: 'midnight',
  group_id: betterbookclub.id,
  host_id: betterbookclub.organizer_id
  })

betterbc_meeting = Event.create({
  name: 'Beginning-of-October Meeting',
  description: 'Reading some Dickens because we\'re not above it',
  location: betterbookclub.location,
  date: Date.parse('2017-10-01'),
  time: 'midnight',
  group_id: betterbookclub.id,
  host_id: betterbookclub.organizer_id
  })

code_sesh = Event.create({
  name: 'Coding Marathon',
  description: 'Staying up til 1AM coding forever to finish fullstacks lololololololol',
  location: react.location,
  date: Date.parse('2017-09-29'),
  time: '6PM',
  group_id: react.id,
  host_id: react.organizer_id
  })
