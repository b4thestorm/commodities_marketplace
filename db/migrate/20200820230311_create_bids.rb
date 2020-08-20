class CreateBids < ActiveRecord::Migration[6.0]
  def change
    create_table :bids do |t|
      t.references :buyer, null: false,  foreign_key: { to_table: :users }
      t.references :seller, null: false,  foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
