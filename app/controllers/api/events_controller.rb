class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.group_id = params[:group_id]
    @event.host_id = current_user.id
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = current_user.events_hosted.find(params[:id])
    @event.update_attributes(event_params)
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    if params[:user_id]
      @events = current_user.appearances
    elsif params[:group_id]
      @events = Event.where(group_id: params[:group_id])
    else
      @events = Event.all
    end
    @events = @events.sort_by {|event| event.date}
    render "api/events/index"
  end

  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: {}
  end

  def event_params
    params.require(:event).permit(:name, :description, :location, :date)
  end

end
