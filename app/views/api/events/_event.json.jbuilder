json.extract! event, :id, :name, :description, :location, :date, :time, :img_url
json.attendance event.attendees.count
json.group do
  json.extract! event.group, :id, :name
end
json.host do
  json.extract! event.host, :id, :name
end
