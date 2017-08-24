class Api::FeedsController < ApplicationController
  before_action :require_user!

  def index
    @feeds = Feeds.all
  end

  def show
    @feed = Feeds.find(params[:id])
  end

  def create

  end

  def destroy

  end

  private

  def feeds_params
    params.require(:feed).permit(:title, :description, :rss_url, :icon_url)
  end
end
