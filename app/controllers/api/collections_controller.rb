class Api::CollectionsController < ApplicationController
  before_action :require_user!

  def index
    @collections = Collection.all
  end

  def show
    @collection = Collection.find(params[:id])
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id
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
    collection = Collection.find(params[:id])
    collection.destroy
    render :index
  end

  private

  def collection_params
    params.require(:collection).permit(:title, :user_id)
  end
end
