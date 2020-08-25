class CommoditiesController < ApplicationController
  before_action :authenticate_user!

  def create
    @commodity = Commodity.new(commodity_params)
    @commodity.user_id = current_user.id

    if @commodity.save
      render json: @commodity
    else
      render json: @commodity.errors, status: :unprocessable_entity
    end
  end
  #GET /users/:user_id/commodities
  def index
    @commodity = current_user.commodity # seller Account default
    if current_user.user_type == 'buyer'
      @commodity = Commodity.last(10)
    end
    render json: @commodity
  end

  private
  def commodity_params
    params.permit(:price, :quantity, :product_name, :user_id)
  end
end
