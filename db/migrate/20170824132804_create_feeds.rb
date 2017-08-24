class CreateFeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :feeds do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :rss_url, null: false
      t.string :icon_url

      t.timestamps null: false
    end
  end
end
