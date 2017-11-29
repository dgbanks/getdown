class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(group_id: params[:group_id])
    @membership.user = current_user
    if @membership.save
      @group = Group.find(params[:group_id])
      render "api/groups/show"
    else
      render json: ["Could not join group"], status: 422
    end
  end

  def destroy
    membership = Membership.where(group_id: params[:group_id]).find_by(user_id: current_user.id)
    @user = membership.user
    if membership.destroy
      render 'api/users/show'
    else
      render json: ["Current user is not a group member"], status: 404
    end
  end

end
