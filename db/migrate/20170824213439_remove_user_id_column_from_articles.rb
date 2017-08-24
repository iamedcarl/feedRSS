class RemoveUserIdColumnFromArticles < ActiveRecord::Migration[5.1]
  def change
    remove_column :articles, :user_id
  end
end
