json.extract! group, :id, :name, :description, :img_url

json.memberCount group.members.count

json.address group.location

json.isCurrentUserMember current_user.groups.include?(group) if current_user

json.location group.zip_code

json.organizer do
  json.extract! group.organizer, :id, :name
end
