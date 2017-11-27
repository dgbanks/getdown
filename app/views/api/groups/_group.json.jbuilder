json.extract! group, :id, :name, :description, :img_url, :location

json.memberCount group.members.count

json.category do
  json.extract! group.category, :id, :name
end

# json.address group.location

json.hasUpcomingEvents !group.events.empty?

json.firstEvent group.events.first

json.isCurrentUserMember current_user.groups.include?(group) if current_user

# json.location group.zip_code

json.organizer group.organizer.name


# json.organizer do
#   json.extract! group.organizer, :id, :name
# end
