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

  #POST   /users/:user_id/bids(.:format)
  def create
    buyer_id = current_user.id
    commodity_id = params[:commodity_id]
    amount = params[:amount]
    qty = params[:qty]
    product = Commodity.where(id: commodity_id)[0]
    seller_id  = product.user.id
    #buyer and seller can't be the same. must fix here. 
    @bid = Bid.new(amount: amount, quantity: qty, buyer_id: buyer_id, seller_id: seller_id, commodities_id: commodity_id)

    if @bid.save
      render json: @bid
    else
      render json: @bid.errors, status: :unprocessable_entity
    end
  end

  private

  def bid_params
    params.permit!(:commodity_id, :amount, :qty, :buyer_id, :user_id)
  end
end
