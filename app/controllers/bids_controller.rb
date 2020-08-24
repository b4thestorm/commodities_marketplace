class BidsController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user.user_type == 'buyer'
      @bids = current_user.sellers
    else
      @bids = current_user.buyers
    end

    render json: @bids
  end

  def create
    buyer_id = current_user.id
    commodity_id = params[:commodity_id]
    amount = params[:amount]
    qty = params[:qty]
    product = Commodity.where(id: commodity_id)
    seller_id  = product.user.id
    @bid = Bid.new(amount: amount, quantity: qty, buyer_id: buyer_id, seller_id: seller_id, commodities_id: commodity_id)
    if bid.save
      render json: @bid
    else
      render json: @commodity.errors, status: :unprocessable_entity
    end
  end
end
