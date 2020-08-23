class CreateCommodities < ActiveRecord::Migration[6.0]
  def change
    create_table :commodities do |t|
      t.integer :price
      t.integer :quantity
      t.string :product_name
      t.references :user
      t.timestamps
    end
  end
end
