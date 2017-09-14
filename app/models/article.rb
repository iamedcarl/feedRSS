# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  content    :text
#  date       :datetime         not null
#  url        :string           not null
#  image_url  :string
#  feed_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author     :string
#  entry_id   :string           not null
#

class Article < ApplicationRecord
  validates :entry_id, :title, :date, :url, presence: true
  validates :feed_id, presence: true

  belongs_to :feed, inverse_of: :articles
  has_one :collection, through: :feed, source: :collections

  has_many :saved_articles, inverse_of: :article, dependent: :destroy
  has_many :users, through: :saved_articles, source: :user

  def self.create_articles(entries, feed)
    entries.each do |entry|
      next if Article.find_by(entry_id: entry.id) || entry.id == nil
      img = entry.image ||
            Article.parse_img_from_content(entry.content) ||
            Article.parse_img_from_content(entry.summary)
      Article.create!(
        author: entry.author,
        content: entry.content || entry.summary,
        date: entry.published || DateTime.now,
        entry_id: entry.entry_id,
        feed_id: feed.id,
        image_url: img,
        title: entry.title,
        url: entry.url || feed.url
      )
    end
    feed
  end

  def self.parse_img_from_content(content)
    return nil if content.nil?
    img = content.scan(/(<img.*?>|<img.*?>.+<\/img>)/)
    if img.empty? || img.nil?
      return nil
    else
      img[0][0].scan(/http.+jpg|http.+jpeg|http.+png|http.+gif/)[0]
    end
  end
end
