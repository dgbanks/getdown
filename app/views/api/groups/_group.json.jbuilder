json.extract! group, :id, :name, :description, :img_url
json.member_count group.members.count
json.address group.location
# json.current_user_member current_user.groups.include?(group)
json.location group.zip_code
json.organizer do
  json.extract! group.organizer, :id, :name
end
