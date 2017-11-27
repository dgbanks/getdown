class AddDetailsToEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :location, :string
    add_column :events, :venue, :string
    add_column :events, :address, :string, null: false
  end
end
