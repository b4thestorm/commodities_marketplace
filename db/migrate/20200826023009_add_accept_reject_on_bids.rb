class AddAcceptRejectOnBids < ActiveRecord::Migration[6.0]
  def change
    add_column :bids, :confirm, :boolean
  end
end
