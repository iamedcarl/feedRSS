class ChangeFeedsDescriptionColumn < ActiveRecord::Migration[5.1]
  def change
    change_column_null :feeds, :description, true
  end
end
