class ChangeColumnArticlesTable < ActiveRecord::Migration[5.1]
  def change
    change_column :articles, :date, :datetime, null: false
  end
end
