class Api::FeedsController < ApplicationController
  before_action :require_user!

  def index
    @feeds = Feed.all.order(:title)
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def create
    @feed = Feed
      .joins(:collections)
      .where('collections.user_id = ?', current_user.id)
      .new(feed_params)

    if Feed.exists?(rss_url: feed_params[:rss_url])
      @feed = Feed.find_by(rss_url: feed_params[:rss_url])
      render :show
    elsif valid_feed_created?(@feed.rss_url)
      if @feed.save
        Article.create_articles(@entries, @feed)
        render :show
      else
        render json: @feed.errors.full_messages, status: 422
      end
    else
      render json: ['Invalid RSS link'], status: 422
    end
  end

  def update
    @feed = Feed.find(params[:id])
    if @feed.update(feed_params)
      @feed.collection_ids = [] if feed_params[:collection_ids].nil?
      render :show
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def articles
    Feed.update_feed(params[:id])
    @articles = Article
      .where(feed_id: params[:id])
      .order(:date)
      .reverse_order
      .limit(10)

    render 'api/articles/index'
  end

  private

  def feed_params
    params.require(:feed).permit(:rss_url, collection_ids: [])
  end

  def valid_feed_created?(url)
    Feedjira.logger.level = Logger::FATAL
    begin
      new_feed = Feedjira::Feed.fetch_and_parse(url)
      icon = @feed.icon(new_feed.url)

      @feed.title = new_feed.title
      @feed.description = new_feed.description
      @feed.icon_url = icon
      @entries = new_feed.entries
      @feed.url = new_feed.url
      true
    rescue
      false
    end
  end

end
