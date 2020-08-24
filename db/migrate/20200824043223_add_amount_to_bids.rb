class AddAmountToBids < ActiveRecord::Migration[6.0]
  def change
    add_column :bids, :amount, :integer
    add_column :bids, :quantity, :integer 
  end
end
