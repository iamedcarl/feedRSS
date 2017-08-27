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
    create_feed(@feed.rss_url)
    if @feed.save
      Article.create_articles(@entries, @feed)
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
    params.require(:feed).permit(:rss_url)
  end

  def create_feed(url)
    new_feed = Feedjira::Feed.fetch_and_parse(url)
    favicon = feed.favicon(url)

    @feed.title = new_feed.title
    @feed.description = feed.description
    @feed.icon_url = favicon
    @entries = feed.entries
    nil
  end
end
