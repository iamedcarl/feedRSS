class ChangeAritcleUserIdValidation < ActiveRecord::Migration[5.1]
  def change
    change_column_null :articles, :user_id, true
  end
end
