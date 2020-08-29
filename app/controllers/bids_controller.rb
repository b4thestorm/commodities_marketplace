class BidsController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user.user_type == 'seller'
      @connection = ActiveRecord::Base.connection
      bids = @connection.exec_query('select * from bids where seller_id =' + "#{current_user.id}")
      @bids = helpers.seller_bids_information(bids)
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
    @bid = Bid.new(amount: amount, quantity: qty, buyer_id: buyer_id, seller_id: seller_id, commodities_id: commodity_id)

    if @bid.save
      render json: @bid
    else
      render json: @bid.errors, status: :unprocessable_entity
    end
  end

  #PUT /users/:user_id/bids/:id
  def update
    bid = Bid.where(id: params[:id].to_i)[0]

    if params[:confirmed] == 'accept'
      bid.confirm = true
      bid.save
    else
      bid.confirm = false
      bid.save
    end

    render json: { message: 'bid updated'}, status: 200
  end

  private

  def bid_params
    params.permit!(:commodity_id, :amount, :qty, :buyer_id, :user_id)
  end
end
