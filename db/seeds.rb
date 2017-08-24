# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Collections.destroy_all
Feeds.destroy_all
Articles.destroy_all

user = User.create(
            username: "demo",
            password: "password",
            fname: "Demo",
            lname: "Account",
)

url1 = 'http://nypost.com/feed/'
url2 = 'https://www.theverge.com/rss/index.xml'
url3 = 'http://www.nytimes.com/timeswire/feeds/'
url4 = 'http://www.espn.com/espn/rss/news'

def get_domain(url)
  /https*:\/\/(?:www.)*(\w+.\w+)\//.match(url).captures.first
end

favicon1 = "https://www.google.com/s2/favicons?domain=#{get_domain(url1)}"
favicon2 = "https://www.google.com/s2/favicons?domain=#{get_domain(url2)}"
favicon3 = "https://www.google.com/s2/favicons?domain=#{get_domain(url3)}"
favicon4 = "https://www.google.com/s2/favicons?domain=#{get_domain(url4)}"

xml1 = HTTParty.get(url1).body
xml2 = HTTParty.get(url2).body
xml3 = HTTParty.get(url3).body
xml4 = HTTParty.get(url4).body

Collections.create!(title: "News", user_id: user.id)
Collections.create!(title: "Sports", user_id: user.id)
Collections.create!(title: "Tech", user_id: user.id)

feed_nypost = Feedjira::Feed.parse(xml1)
feed_theverge = Feedjira::Feed.parse(xml2)
feed_nytimes = Feedjira::Feed.parse(xml3)
feed_espn = Feedjira::Feed.parse(xml4)

feed1 = Feeds.create!(
  title: feed_nypost.title,
  description: feed_nypost.description,
  rss_url: url1,
  icon_url: favicon1
)

feed2 = Feeds.create!(
  title: feed_theverge.title,
  description: feed_theverge.description,
  rss_url: url2,
  icon_url: favicon2
)

feed3 = Feeds.create!(
  title: feed_nytimes.title,
   description: feed_nytimes.description,
   rss_url: url3,
   icon_url: favicon3
)

feed4 = Feeds.create!(
  title: feed_espn.title,
  description: feed_espn.description,
  rss_url: url4,
  icon_url: favicon4
)

feed_nypost.entries.each do |article|
  Articles.create!(
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed1.id,
  )
end

feed_theverge.entries.each do |article|
  Articles.create!(
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed2.id,
  )
end

feed_nytimes.entries.each do |article|
  Articles.create!(
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed3.id,
  )
end

feed_espn.entries.each do |article|
  Articles.create!(
    title: article.title,
    content: article.content || article.summary,
    date: article.published,
    url: article.url,
    viewed: false,
    image_url: article.image,
    feed_id: feed4.id,
  )
end
