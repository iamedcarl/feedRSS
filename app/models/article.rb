# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  entry_id   :string           not null
#  title      :string           not null
#  author     :string
#  date       :datetime         not null
#  image_url  :string
#  content    :text
#  url        :string           not null
#  viewed     :boolean          default(FALSE), not null
#  saved      :boolean          default(FALSE), not null
#  feed_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Article < ApplicationRecord
  validates :entry_id, :title, :date, :url, presence: true
  validates :viewed, inclusion: { in: [true, false] }
  validates :saved, inclusion: { in: [true, false] }
  validates :feed_id, presence: true

  belongs_to :feed, inverse_of: :articles
  has_one :collection, through: :feed, source: :collections

  has_many :saved_articles, inverse_of: :article, dependent: :destroy
  has_many :users, through: :saved_articles, source: :user

  def self.create_articles(entries, feed)
    entries.each do |entry|
      next if Article.find_by(entry_id: entry.id)
      img = entry.image ||
            Article.parse_img_from_content(entry.content) ||
            Article.parse_img_from_content(entry.summary)
      Article.create!(
        author: entry.author,
        content: entry.content || entry.summary,
        date: entry.published,
        entry_id: entry.entry_id,
        feed_id: feed.id,
        image_url: img,
        saved: false,
        title: entry.title,
        url: entry.url,
        viewed: false
      )
    end
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
