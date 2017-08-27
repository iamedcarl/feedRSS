class Api::CollectionsController < ApplicationController
  before_action :require_user!

  def index
    @collections = current_user.collections
  end

  def show
    @collection = current_user.collections.find(params[:id])
  end

  def create
    @collection = current_user.collections.new(collection_params)
    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    @collection = current_user.collections.find(params[:id])
    if @collection.update(collection_params)
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def destroy
    collection = current_user.collections.find(params[:id])
    collection.destroy
    render :index
  end

  private

  def collection_params
    params.require(:collection).permit(:title, :user_id)
  end
end
