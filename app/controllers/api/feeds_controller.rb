class Api::FeedsController < ApplicationController
  before_action :require_user!

  def index
    # @feeds = Feed
    #   .joins(:collections)
    #   .where('collections.user_id = ?', current_user.id)
    #
    @feeds = Feed.all.each do |feed|
      Feed.update_feed(feed.id)
    end
  end

  def show
    @feed = Feed.find(params[:id])
    Feed.update_feed(@feed.id)
  end

  def create
    @feed = Feed
      .joins(:collections)
      .where('collections.user_id = ?', current_user.id)
      .new(feeds_params)
    create_feed(@feed.rss_url)

    if Feed.exists?(rss_url: @feed.rss_url)
      Feed.find_by(rss_url: @feed.rss_url)
    else
      @feed.save
      current_user.collections.articles.create_articles(@entries, @feed)
      render :show
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def articles
    @articles = Article
      .where(feed_id: params[:id])
      .order(:date)
      .reverse_order
      .limit(10)

    render 'api/articles/index'
  end

  private

  def feeds_params
    params.require(:feed).permit(:rss_url)
  end

  def create_feed(url)
    new_feed = Feedjira::Feed.fetch_and_parse(url)
    icon = feed.icon(url)
    domain = feed.domain(url)

    @feed.title = new_feed.title
    @feed.description = feed.description
    @feed.icon_url = icon
    @entries = feed.entries
    @feed.url = fomain
    nil
  end

end
