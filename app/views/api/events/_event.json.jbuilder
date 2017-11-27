json.extract! event, :id, :name, :description, :address, :venue, :date, :time

json.attendance event.attendees.count

json.group do
  json.extract! event.group, :id, :name
end

json.category do
  json.extract! event.category, :id, :name
end

json.host do
  json.extract! event.host, :id, :name
end
