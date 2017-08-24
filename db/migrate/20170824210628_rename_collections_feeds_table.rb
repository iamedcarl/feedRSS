class RenameCollectionsFeedsTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :collections_feeds, :collected_feeds
  end
end
