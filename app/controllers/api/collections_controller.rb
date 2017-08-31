class Api::CollectionsController < ApplicationController
  before_action :require_user!

  def index
    @collections = current_user.collections
  end

  def show
    @collection = current_user.collections.find_by(title: params[:id])
  end

  def create
    @collection = current_user.collections.new(collection_params)
    if Collection.exists?(title: @collection.title)
      render json: ['Collection already exists'], status: 422
    elsif @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    @collection = current_user.collections.find_by(title: params[:id])
    feed_ids = @collection.feed_ids
    if @collection.update(collection_params)
      @collection.feed_ids = @collection.feed_ids.concat(feed_ids)
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

  def articles
    @articles = Article
      .joins(:feed, :collection)
      .where('collections.title = ?', params[:id])
      .order(:date)
      .reverse_order
      .limit(10)

    render 'api/articles/index'
  end

  private

  def collection_params
    params.require(:collection).permit(:title, :user_id, feed_ids: [])
  end
end
