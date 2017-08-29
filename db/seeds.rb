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

url1 = "http://nypost.com/feed/"
url2 = "https://www.theverge.com/rss/index.xml"
url3 = "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
url4 = "http://feeds.feedburner.com/TechCrunch/"

def icon(url)
  domain = /(https*:\/\/.+?\/)|(https*:\/\/.+)/.match(url).to_s
  "https://logo.clearbit.com/".concat(domain)
end

Collection.destroy_all

news1 = Collection.create!(title: "News", user_id: user1.id)
tech = Collection.create!(title: "Tech", user_id: user1.id)
news2 = Collection.create!(title: "News", user_id: user2.id)

feed_nypost = Feedjira::Feed.fetch_and_parse(url1)
feed_theverge = Feedjira::Feed.fetch_and_parse(url2)
feed_nytimes = Feedjira::Feed.fetch_and_parse(url3)
feed_techcrunch = Feedjira::Feed.fetch_and_parse(url4)

Feed.destroy_all

feed1 = Feed.create!(
  title: feed_nypost.title,
  description: feed_nypost.description,
  rss_url: url1,
  icon_url: icon(feed_nypost.url),
  url: feed_nypost.url
)

feed2 = Feed.create!(
  title: feed_theverge.title,
  description: feed_theverge.description,
  rss_url: url2,
  icon_url: icon(feed_theverge.url),
  url: feed_theverge.url
)

feed3 = Feed.create!(
  title: feed_nytimes.title,
  description: feed_nytimes.description,
  rss_url: url3,
  icon_url: icon(feed_nytimes.url),
  url: feed_nytimes.url
)

feed4 = Feed.create!(
  title: feed_techcrunch.title,
  description: feed_techcrunch.description,
  rss_url: url4,
  icon_url: icon(feed_techcrunch.url),
  url: feed_techcrunch.url
)

CollectedFeed.destroy_all

CollectedFeed.create!(collection_id: news1.id, feed_id: feed1.id)
CollectedFeed.create!(collection_id: tech.id, feed_id: feed2.id)
CollectedFeed.create!(collection_id: news1.id, feed_id: feed3.id)
CollectedFeed.create!(collection_id: news2.id, feed_id: feed1.id)
CollectedFeed.create!(collection_id: news2.id, feed_id: feed3.id)

Article.destroy_all

Article.create_articles(feed_nypost.entries, feed1)
Article.create_articles(feed_theverge.entries, feed2)
Article.create_articles(feed_nytimes.entries, feed3)
Article.create_articles(feed_techcrunch.entries, feed4)
