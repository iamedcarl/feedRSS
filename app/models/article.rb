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

      Article.create!(
        entry_id: entry.entry_id,
        title: entry.title,
        author: entry.author,
        date: entry.published,
        url: entry.url,
        image_url: entry.image || parse_img_from_content(entry.content),
        content: entry.content || entry.summary,
        feed_id: feed.id,
        viewed: false,
        saved: false
      )
    end
  end

  def parse_img_from_content(content)
    content.scan(/(<img.*?>|<img.*?>.+<\/img>)/)[0][0]
  end
end
