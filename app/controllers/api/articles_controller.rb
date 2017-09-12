class Api::ArticlesController < ApplicationController
  before_action :require_user!

  def index
    @articles = Article
      .joins(:feed, :collection)
      .where('collections.user_id = ?', current_user.id)
      .order(:date)
      .reverse_order
      .limit(30)
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    @article = current_user.collections.articles.new(article_params)
    if @article.save
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      @article.user_ids = [] if article_params[:user_ids].nil?
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  private

  def article_params
    params.require(:article).permit(
      :title,
      :entry_id,
      :content,
      :date,
      :url,
      :image_url,
      :feed_id,
      user_ids: []
    )
  end
end
