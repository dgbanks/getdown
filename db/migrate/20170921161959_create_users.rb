class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest
      t.string :session_token
      t.integer :zip_code
      t.float :latitude
      t.float :longitude
      t.string :img_url

      t.timestamps
    end
    add_index :users, :email
  end
end
