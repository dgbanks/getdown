class Api::RsvpController < ApplicationController

  def create
    @rsvp = Rsvp.new(event_id: params[:event_id])
    @rsvp.user = current_user
    if @rsvp.save
      @event = Event.find(params[:event_id])
      render "api/events/show"
    else
      render json: ["Could not rsvp to event"], status: 422
    end
  end

end
