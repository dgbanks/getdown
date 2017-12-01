json.extract! group, :id, :name, :description, :img_url, :location, :members

json.memberCount group.members.count

json.category do
  json.extract! group.category, :id, :name
end


  # json.array!(group.members) do |member|
  #   json.extract! member
  # end

json.hasUpcomingEvents !group.events.empty?

json.firstEvent group.events.first

json.isCurrentUserMember current_user.groups.include?(group) if current_user

json.isCurrentUserOrganizer group.organizer == current_user if current_user

# json.location group.zip_code

json.organizer group.organizer.name


# json.organizer do
#   json.extract! group.organizer, :id, :name
# end
