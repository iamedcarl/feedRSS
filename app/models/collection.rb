# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user, inverse_of: :collections

  has_many :collected_feeds, inverse_of: :collection, dependent: :destroy
  has_many :feeds, through: :collected_feeds, source: :feed
  has_many :articles, through: :feeds, source: :articles
end
