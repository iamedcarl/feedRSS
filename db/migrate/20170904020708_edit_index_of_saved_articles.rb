class EditIndexOfSavedArticles < ActiveRecord::Migration[5.1]
  def change
    remove_index :saved_articles, :user_id
    remove_index :saved_articles, :article_id
    remove_index :saved_articles, [:user_id, :article_id]

    add_index :saved_articles, :user_id
    add_index :saved_articles, :article_id
    add_index :saved_articles, [:user_id, :article_id], unique: true
  end
end
