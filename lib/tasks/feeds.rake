namespace :feeds do
  desc "TODO"
  task update: :environment do
    feeds = Feed.all

    feeds.each do |feed|
      Feed.update_feed(feed.id)
    end
  end

end
