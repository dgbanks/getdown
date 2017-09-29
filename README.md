# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## getdown

Getdown is a Meetup clone which allows account holders to find groups
and events nearby organized by other users who are looking to get down
with people who share their interests and hobbies. There is a demo login
option that allows users to explore the site.

#### Features

Getdown uses a Ruby on Rails backend, a JavaScript/React frontend, and
is deployed through Heroku.

###### Groups

Groups can be accessed in multiple ways on Getdown. They can be found
through searching by name, description, or location on the homepage.
Users can also find groups they've already joined by visiting the
'Your Groups' tab in the dropdown menu.

```
# implementation of search on the backend...

# app/models/group.rb
def self.search(query)
  self.where("name ILIKE ? OR description ILIKE ? OR location ILIKE ?", "%#{query}%", "%#{query}%", "%#{query}%")
end

# app/controllers/api/groups_controller.rb
def search
  @groups = Group.search(group_params[:query])
  render "api/groups/index"
end
```

Group detail pages include buttons which allow users to join the group
or, if already a member, add a new event for that group. The navigation
menu on the left side holds the group's most basic information, and the
index in the middle of the page lists in order of date all of the
group's upcoming events.

###### Events

A logged-in user can see his or her RSVP'd events on the bottom half of
the homepage. By visiting any group page, one can also find a dated index
of all of that group's upcoming events.

###### Links

[Meetup, the app being cloned] (https://www.meetup.com/)

[]
