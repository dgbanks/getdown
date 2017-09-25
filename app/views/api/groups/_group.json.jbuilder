json.extract! group, :id, :name, :description, :location, :img_url
json.organizer do
  json.extract! group.organizer, :id, :name
end
