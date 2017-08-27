# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user = User.create(
            username: "demo",
            password: "password",
            fname: "Demo",
            lname: "Account",
)

url1 = "http://nypost.com/feed/"
url2 = "https://www.theverge.com/rss/index.xml"
url3 = "http://www.businessinsider.com/clusterstock/contributor.rss"

def get_domain(url)
  /https*:\/\/(?:\w{3}.)*(\w+.\w+)\//.match(url).captures.first
end

favicon1 = "https://www.google.com/s2/favicons?domain=#{get_domain(url1)}"
favicon2 = "https://www.google.com/s2/favicons?domain=#{get_domain(url2)}"
favicon3 = "https://www.google.com/s2/favicons?domain=#{get_domain(url3)}"

Collection.destroy_all

Collection.create!(title: "News", user_id: user.id)
Collection.create!(title: "Sports", user_id: user.id)
Collection.create!(title: "Tech", user_id: user.id)

feed_nypost = Feedjira::Feed.fetch_and_parse(url1)
feed_theverge = Feedjira::Feed.fetch_and_parse(url2)
feed_nytimes = Feedjira::Feed.fetch_and_parse(url3)

Feed.destroy_all

feed1 = Feed.create!(
  title: feed_nypost.title,
  description: feed_nypost.description,
  rss_url: url1,
  icon_url: favicon1
)

feed2 = Feed.create!(
  title: feed_theverge.title,
  description: feed_theverge.description,
  rss_url: url2,
  icon_url: favicon2
)

feed3 = Feed.create!(
  title: feed_nytimes.title,
  description: feed_nytimes.description,
  rss_url: url3,
  icon_url: favicon3
)

Article.destroy_all

feed_nypost.entries.each do |article|
  Article.create!(
    entry_id: article.entry_id,
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed1.id,
    author: article.author,
    saved: false
  )
end

feed_theverge.entries.each do |article|
  Article.create!(
    entry_id: article.entry_id,
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed2.id,
    author: article.author,
    saved: false
  )
end

feed_nytimes.entries.each do |article|
  Article.create!(
    entry_id: article.entry_id,
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed3.id,
    author: article.author,
    saved: false
  )
end
