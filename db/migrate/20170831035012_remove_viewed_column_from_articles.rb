class RemoveViewedColumnFromArticles < ActiveRecord::Migration[5.1]
  def change
    remove_column :articles, :viewed
  end
end
