class CreateCollectionsFeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :collections_feeds do |t|
      t.integer :collection_id, null: false
      t.integer :feed_id, null: false

      t.timestamps null: false
    end

    add_index :collections_feeds, [:collection_id, :feed_id]
    add_index :collections_feeds, :collection_id, unique: true
    add_index :collections_feeds, :feed_id, unique: true
  end
end
