class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description
      t.integer :zip_code
      t.float :latitude
      t.float :longitude
      t.string :img_url
      t.integer :organizer_id, null: false
      t.timestamps
    end
    add_index :groups, :organizer_id
  end
end
