class CreateSavedArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_articles do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false

      t.timestamps
    end

    add_index :saved_articles, [:user_id, :article_id], unique: true
    add_index :saved_articles, :user_id, unique: true
    add_index :saved_articles, :article_id, unique: true
  end
end
