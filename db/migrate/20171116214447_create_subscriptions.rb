class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :subscriptions, :user_id
    add_index :subscriptions, :category_id
  end
end
