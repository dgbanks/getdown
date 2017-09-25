class AddHostIdToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :host_id, :integer, null: false
  end
end
