class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(group_id: params[:group_id])
    @membership.user = current_user
    if @membership.save
      @user = current_user
      render "api/users/show"
    else
      render json: ["Could not join group"], status: 422
    end
  end

end
