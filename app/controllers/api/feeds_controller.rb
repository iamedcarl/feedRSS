class Api::FeedsController < ApplicationController
  before_action :require_user!

  def index
    @feeds = Feed.all
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def create
    @feed = Feed.new(feeds_params)
    if @feed.save
      render :show
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def destroy
    feed = Feed.find(params[:id])
    feed.destroy
    render :index
  end

  private

  def feeds_params
    params.require(:feed).permit(:title, :description, :rss_url, :icon_url)
  end
end
