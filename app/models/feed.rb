# == Schema Information
#
# Table name: feeds
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  rss_url     :string           not null
#  icon_url    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Feed < ApplicationRecord
  validates :title, :rss_url, presence: true

  has_many :collected_feeds, dependent: :destroy
  has_many :collections, through: :collected_feeds, source: :collection

  has_many :articles, dependent: :destroy

  def self.parse_feed(url)
    feed = Feedjira::Feed.fetch_and_parse(url)
    favicon = favicon(url)

    feed_attributes = {
      title: feed.title,
      description: feed.description,
      rss_url: feed.feed_url,
      icon_url: favicon,
      entries: feed.entries
    }
  end

  def favicon(url)
    domain = /https*:\/\/(?:\w{3}.)*(\w+.\w+)\//.match(url).captures.first
    "https://www.google.com/s2/favicons?domain=#{domain}"
  end
end
