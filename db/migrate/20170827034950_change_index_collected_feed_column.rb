class ChangeIndexCollectedFeedColumn < ActiveRecord::Migration[5.1]
  def change
    remove_index :collected_feeds, :collection_id
    remove_index :collected_feeds, :feed_id
    add_index :collected_feeds, :collection_id
    add_index :collected_feeds, :feed_id
  end
end
