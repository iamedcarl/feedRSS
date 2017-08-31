# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(
            username: "demo",
            password: "password",
            fname: "Demo",
            lname: "Account",
)

user2 = User.create(
            username: "user",
            password: "password",
            fname: "User",
            lname: "Account",
)

feeds = [
  "http://hosted.ap.org/lineups/USHEADS-rss_2.0.xml?SITE=SCAND&SECTION=HOME"
  # "http://hosted.ap.org/lineups/SPORTSHEADS-rss_2.0.xml?SITE=VABRM&SECTION=HOME",
  # "http://feeds.washingtonpost.com/rss/politics",
  # "http://feeds.washingtonpost.com/rss/world",
  # "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml?edition=int",
  # "http://rss.cnn.com/rss/cnn_topstories.rss",
  # "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
  # "http://nypost.com/feed/",
  # "http://feeds.gothamistllc.com/gothamist05",
  # "https://www.theverge.com/rss/index.xml",
  # "http://feeds.feedburner.com/TechCrunch/",
  # "https://www.wired.com/feed",
  # "http://www.espn.com/espn/rss/news",
  # "https://www.si.com/rss/si_topstories.rss",
  # "https://ny.eater.com/2014/12/22/7433785/rss/index.xml"
  # "http://www.npr.org/rss/rss.php?id=1001",
  # "https://www.nasa.gov/rss/dyn/image_of_the_day.rss",
]

def icon(url)
  domain = /(https*:\/\/.+?\/)|(https*:\/\/.+)/.match(url).to_s
  "https://logo.clearbit.com/".concat(domain)
end

Collection.destroy_all
Feed.destroy_all
CollectedFeed.destroy_all
Article.destroy_all

def create_feed_seed(url)
  new_feed = Feedjira::Feed.fetch_and_parse(url)

  feed = Feed.create!(
    title: new_feed.title,
    description: new_feed.description,
    rss_url: url,
    icon_url: icon(new_feed.url),
    url: new_feed.url
  )

  Article.create_articles(new_feed.entries, feed)
end

feeds.each do |feed|
  create_feed_seed(feed)
end
