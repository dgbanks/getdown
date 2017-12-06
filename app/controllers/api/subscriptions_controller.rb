class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new({category_id: params[:category_id]})
    @subscription.user = current_user # unless @subscription.find_by(user_id: current_user.id)
    if @subscription.save
      @user = User.find(@subscription.user_id)
      render "api/users/show"
    else
      render json: ["Could not subscribe to category"], status: 422
    end
  end

  def destroy
    subscription = Subscription.where(category_id: params[:category_id]).find_by(user_id: current_user.id)
    @user = subscription.user
    if subscription.destroy
      render 'api/users/show'
    else
      render json: ["Current user is not a category subscriber"], status: 404
    end
  end

end
