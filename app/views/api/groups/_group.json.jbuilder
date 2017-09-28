json.extract! group, :id, :name, :description, :img_url, :members
json.location group.zip_code
json.organizer do
  json.extract! group.organizer, :id, :name
end
