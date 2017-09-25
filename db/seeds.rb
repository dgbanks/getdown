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
  location: 'wherever'
  })

guest = User.create({
  name: 'guest',
  email: 'email2',
  password: 'password',
  location: 'wherever'
  })

someone = User.create({
  name: 'someone',
  email: 'email3',
  password: 'password',
  location: 'wherever'
  })

user = User.create({
  name: 'user',
  email: 'email4',
  password: 'password',
  location: 'wherever'
  })

mom = User.create({
  name: 'mom',
  email: 'email5',
  password: 'password',
  location: 'wherever'
  })


### GROUPS

Group.destroy_all

bookclub = Group.create({
  name: 'Book Club',
  description: 'we read books',
  location: 'wherever',
  organizer_id: david.id
  })

betterbookclub = Group.create({
  name: 'Better Book Club',
  description: 'we read hella boox',
  location: 'wherever',
  organizer_id: mom.id
  })

fightclub = Group.create({
  name: 'Fight Club',
  description: '...',
  location: 'wherever',
  organizer_id: guest.id
  })

beer = Group.create({
  name: 'B3333R',
  description: 'beer',
  location: 'wherever',
  organizer_id: user.id
  })


### EVENTS

Event.destroy_all

bcmeeting = Event.create({
  name: 'September meeting',
  description: 'super fun',
  location: 'outside',
  date: Date.parse('2017-09-29'),
  time: 'Noon',
  group_id: bookclub.id,
  host_id: bookclub.organizer_id
  })

fight = Event.create({
  name: 'weekend brawl',
  description: 'super fun',
  location: 'outside',
  date: Date.parse('2017-10-01'),
  time: 'midnight',
  group_id: fightclub.id,
  host_id: fightclub.organizer_id
  })

drinking = Event.create({
  name: 'burp',
  description: 'super fun',
  location: 'inside',
  date: Date.parse('2017-09-29'),
  time: '6PM',
  group_id: beer.id,
  host_id: beer.organizer_id
  })
