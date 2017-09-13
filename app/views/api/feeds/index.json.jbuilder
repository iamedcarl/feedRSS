feeds = []

@feeds.each do |feed|
  feeds << feed.id
  json.set! feed.id do
    json.partial! 'api/feeds/feed', feed: feed
  end
end

json.sorted_feeds feeds
