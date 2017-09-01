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
  "http://www.businessinsider.com/rss",
  "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
  "http://www.nytimes.com/services/xml/rss/nyt/US.xml",
  "http://feeds.nytimes.com/nyt/rss/Technology",
  "http://feeds.washingtonpost.com/rss/politics",
  "http://feeds.washingtonpost.com/rss/world",
  "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml?edition=int",
  "http://rss.cnn.com/rss/cnn_topstories.rss",
  "http://nypost.com/feed/",
  "http://feeds.gothamistllc.com/gothamist05",
  "https://www.theverge.com/rss/index.xml",
  "http://feeds.feedburner.com/TechCrunch/",
  "https://www.wired.com/feed",
  "http://www.espn.com/espn/rss/news",
  "https://www.si.com/rss/si_topstories.rss",
  "https://ny.eater.com/2014/12/22/7433785/rss/index.xml",
  "http://hosted.ap.org/lineups/USHEADS-rss_2.0.xml?SITE=SCAND&SECTION=HOME",
  "http://hosted.ap.org/lineups/SPORTSHEADS-rss_2.0.xml?SITE=VABRM&SECTION=HOME",
  # "http://www.npr.org/rss/rss.php?id=1001",
  # "https://www.nasa.gov/rss/dyn/image_of_the_day.rss",
  "http://feeds2.feedburner.com/time/topstories",
  "https://www.theguardian.com/uk/rss",
  "http://feeds.reuters.com/reuters/technologyNews",
  "http://feeds.arstechnica.com/arstechnica/index",
  "http://www.dailymail.co.uk/articles.rss",
  "https://venturebeat.com/feed/",
  "https://hackernoon.com/feed",
  "https://hackaday.com/blog/feed/",
  "https://www.reddit.com/r/news.rss",
  "http://feeds.foxnews.com/foxnews/latest",
  "http://gizmodo.com/rss",
  "http://www.independent.co.uk/rss",
  "https://www.kickstarter.com/blog.atom",
  "http://kotaku.com/rss",
  # "http://www.latimes.com/local/rss2.0.xml",
  "http://lifehacker.com/rss",
  "http://feeds.macrumors.com/MacRumors-Front",
  "http://www.pcworld.com/index.rss",
  "http://www.pcworld.com/category/business/index.rss",
  "http://www.pcworld.com/category/laptop-computers/index.rss",
  "http://www.pcworld.com/category/software/index.rss",
  "http://www.pcworld.com/category/phones/index.rss",
  "http://www.macworld.com/index.rss",
  "http://www.macworld.com/reviews/index.rss",
  "http://www.macworld.com/category/os-x/index.rss",
  "http://www.macworld.com/category/entertainment/index.rss",
  "http://www.macworld.com/category/software-productivity/index.rss",
  "http://www.macworld.com/category/macbooks/index.rss",
  "http://www.politifact.com/feeds/articles/truth-o-meter/",
  # "http://www.rollingstone.com/rss",
  # "http://www.rollingstone.com/music/rss",
  # "http://www.rollingstone.com/movies/rss",
  # "http://www.rollingstone.com/culture/rss",
  # "http://www.rollingstone.com/reviews/rss",
  # "http://www.rollingstone.com/albumreviews/rss",
  "http://feeds.feedburner.com/seriouseats/recipes",
  "http://feeds.feedburner.com/SeriousEats-thefoodlab",
  "https://www.yahoo.com/news/rss",
  "http://www.telegraph.co.uk/rss.xml",
  "https://www.theatlantic.com/feed/best-of/",
  "https://www.theatlantic.com/feed/channel/technology/",
  "https://www.theatlantic.com/feed/channel/entertainment/",
  "https://www.theatlantic.com/feed/channel/science/",
  "https://www.theatlantic.com/feed/channel/politics/",
  "https://www.theatlantic.com/feed/channel/business/",
  "http://www.thedailymash.co.uk/feed",
  "https://www.thenation.com/feed/?post_type=article",
  "http://www.vanityfair.com/feed/rss",
  "http://feeds.feedburner.com/variety/news/frontpage"
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
  # debugger
  create_feed_seed(feed)
end
