class Api::GroupsController < ApplicationController

  def create
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
    if params[:user_id]
      @groups = current_user.groups
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
  end

  def search
    @groups = Group.search(group_params[:query])
    render "api/groups/index"
  end

  def group_params
    params.require(:group).permit(:name, :description, :location, :query)
  end

end
