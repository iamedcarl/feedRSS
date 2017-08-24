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
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :collected_feeds, dependent: :destroy
  has_many :feeds, through: :collected_feeds, source: :feed

end
