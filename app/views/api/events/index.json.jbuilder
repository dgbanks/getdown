@events.each do |event|
  json.set! event.id do
    json.partial! "api/events/events", event: event
  end
end
