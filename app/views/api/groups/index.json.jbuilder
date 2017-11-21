@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :img_url
    json.memberCount group.members.count
  end
end
