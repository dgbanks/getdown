json.extract! event, :id, :name, :description, :location, :date, :img_url
json.group do
  json.extract! event.group, :id, :name
end
