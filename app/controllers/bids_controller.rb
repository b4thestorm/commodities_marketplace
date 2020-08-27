class BidsController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user.user_type == 'seller'
      @connection = ActiveRecord::Base.connection
      @bids = @connection.exec_query('select * from bids where seller_id =' + "#{current_user.id}")
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

  #PUT /users/:user_id/bids
  def update
    #use composite key to make sure you are creating the correct update here.
    # binding.pry
    # seller_id = current_user.id
    # buyer_id = params[:buyer_id]
    # find bid
    # set bid to true or false
    # save
  end

  private

  def bid_params
    params.permit!(:commodity_id, :amount, :qty, :buyer_id, :user_id)
  end
end
