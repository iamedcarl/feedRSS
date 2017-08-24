# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  content    :text
#  date       :date             not null
#  url        :string           not null
#  viewed     :boolean          default(FALSE), not null
#  image_url  :string
#  feed_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Article < ApplicationRecord
  validates :title, :date, :url, presence: true
  validates :viewed, inclusion: { in: [true, false] }
  validates :feed_id, presence: true

  belongs_to :feed

  has_many :saved_articles, dependent: :destroy
  has_many :users, through: :saved_articles, source: :user

end
