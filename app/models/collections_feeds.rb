# == Schema Information
#
# Table name: collections_feeds
#
#  id            :integer          not null, primary key
#  collection_id :integer          not null
#  feed_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class CollectionsFeeds < ApplicationRecord
  validates :collection_id, :feed_id, presence: true, uniqueness: true

  belongs_to :collection
  belongs_to :feed

end
