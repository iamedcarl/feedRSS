class AddColumnFeedUrl < ActiveRecord::Migration[5.1]
  def change
    add_column :feeds, :url, :string, null: false
  end
end
