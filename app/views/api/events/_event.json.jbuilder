json.extract! event, :id, :name, :description, :address, :venue, :date, :time, :attendees

json.attendance event.attendees.count

json.isCurrentUserAttending current_user.appearances.include?(event) if current_user

json.group do
  json.extract! event.group, :id, :name
end

json.category do
  json.extract! event.category, :id, :name
end

json.host do
  json.extract! event.host, :id, :name
end
