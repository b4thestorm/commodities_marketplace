class AddBidsToCommodity < ActiveRecord::Migration[6.0]
  def change
    add_reference :bids, :commodities, foreign_key: true
  end
end
