namespace :feeds do
  desc "TODO"
  task update: :environment do
    Feedjira.logger.level = Logger::FATAL
    feeds = Feed.all

    feeds.each do |feed|
      Feed.update_feed(feed.id)
    end
  end

end
