class RemoveColumnFromArticles < ActiveRecord::Migration[5.1]
  def change
    remove_column :articles, :saved, :viewed
  end
end
