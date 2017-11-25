json.extract! category, :id, :name, :groups

json.isCurrentUserSubscriber current_user.interests.include?(category) if current_user

# json.attendance event.attendees.count
# json.group do
#   json.extract! category.group, :id, :name
# end
# json.host do
#   json.extract! event.host, :id, :name
# end
