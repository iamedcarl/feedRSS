sorted_articles = []

@articles.each do |article|
  sorted_articles << article.id
  json.set! article.id do
    json.partial! 'api/articles/article', article: article
  end

end
