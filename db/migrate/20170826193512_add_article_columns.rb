class AddArticleColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :author, :string
    add_column :articles, :saved, :boolean, null: false, default: false
  end
end
