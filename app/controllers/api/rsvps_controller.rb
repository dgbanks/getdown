class Api::RsvpsController < ApplicationController

  def create
    @rsvp = Rsvp.new({event_id: params[:event_id]})
    @rsvp.user = current_user # unless @rsvp.find_by(user_id: current_user.id)
    if @rsvp.save
      @user = User.find(@rsvp.user_id)
      render "api/users/show"
    else
      render json: ["Could not rsvp to event"], status: 422
    end
  end

  def destroy
    rsvp = Rsvp.where(event_id: params[:event_id]).find_by(user_id: current_user.id)
    @user = rsvp.user
    if rsvp.destroy
      render 'api/users/show'
    else
      render json: ["Current user is not attending"], status: 404
    end
  end

end
