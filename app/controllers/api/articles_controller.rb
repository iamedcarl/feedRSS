class Api::ArticlesController < ApplicationController
  before_action :require_user!

  def index
    @articles = Article
      .joins(:feed, :collection)
      .where('collections.user_id = ?', current_user.id)
      .order(:date)
      .reverse_order

    @articles.all.each do |article|
      Feed.update_feed(article.feed_id)
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    @article = current_user.collections.articles.new(articles_params)
    if @article.save
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  private

  def articles_params
    params.require(:article).permit(
      :title,
      :entry_id,
      :content,
      :date,
      :url,
      :image_url,
      :viewed,
      :saved,
      :user_id,
      :feed_id
    )
  end
end
