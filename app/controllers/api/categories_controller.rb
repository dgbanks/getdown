class Api::CategoriesController < ApplicationController

  def create
    @category = Category.new
    if @category.save
      render "api/categories/show"
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def index
    @categories = Category.all
    render "api/categories/index"
  end

  def show
    @category = Category.find(params[:id])
    render "api/categories/show"
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
