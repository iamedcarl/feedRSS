class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :collections, :user_id
  end
end
