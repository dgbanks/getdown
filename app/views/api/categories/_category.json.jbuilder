json.extract! category, :id, :name, :img_url, :groups

json.isCurrentUserSubscriber current_user.interests.include?(category) if current_user && category

json.subscriptionCount category.subscribers.count

# json.attendance event.attendees.count
# json.group do
#   json.extract! category.group, :id, :name
# end
# json.host do
#   json.extract! event.host, :id, :name
# end
