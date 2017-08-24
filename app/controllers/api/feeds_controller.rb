class Api::FeedsController < ApplicationController
  before_action :require_user!

  def index
    @feeds = Feeds.all
  end

  def show
    @feed = Feeds.find(params[:id])
  end

  def create
    @feed = Feeds.new(feeds_params)
    if @feed.save
      render :show
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def destroy
    feed = Feeds.find(params[:id])
    feed.destroy
    render :index
  end

  private

  def feeds_params
    params.require(:feed).permit(:title, :description, :rss_url, :icon_url)
  end
end
