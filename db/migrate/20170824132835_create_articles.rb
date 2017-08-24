class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.date :date, null: false
      t.string :url, null: false
      t.boolean :viewed, default: false, null: false
      t.string :image_url
      t.integer :user_id, null: false
      t.integer :feed_id, null: false

      t.timestamps null: false
    end

    add_index :articles, :user_id
    add_index :articles, :feed_id
  end
end
