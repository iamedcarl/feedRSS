# == Schema Information
#
# Table name: collected_feeds
#
#  id            :integer          not null, primary key
#  collection_id :integer          not null
#  feed_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class CollectedFeed < ApplicationRecord
  validates :collection, :feed, presence: true

  belongs_to :collection
  belongs_to :feed

end
