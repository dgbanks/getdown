json.extract! event, :id, :name, :description, :location, :date, :img_url
json.attendance event.attendees.count
json.group do
  json.extract! event.group, :id, :name
end
