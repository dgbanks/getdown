class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(category_id: params[:category_id])
    @subscription.user = current_user
    if @subscription.save
      @category = Category.find(params[:category_id])
      render "api/categories/show"
    else
      render json: ["Could not subscribe to category"], status: 422
    end

  end

end
