class Api::GroupsController < ApplicationController

  def create
    # @group = current_user.groups.new(group_params)
    @group = Group.new(group_params)
    @group.organizer_id = current_user.id
    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = current_user.groups.find(params[:id])
    @group.update_attributes(group_params)
    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def index
    if params[:organizer_id]
      @groups = User.find(params[:id]).groups
    else
      @groups = Group.all
    end
    render "api/groups/index"
  end

  def show
    @group = Group.find(params[:id])
    render "api/groups/show"
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render json: {}

    # @group = Group.find(params[:id])
    # if @group.organizer_id = current_user.id
    #   @group.destroy
    #   render json: {}
    # else
    #   render json: @group.errors.full_messages, status: 403
    # end
  end

  def group_params
    params.require(:group).permit(:name, :description, :location)
  end

end
