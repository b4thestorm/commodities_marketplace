module BidsHelper
  #return [{}, {}...]
  def seller_bids_information(list)
    transformed_list = []
      list.each do |bid|
        commodity = Commodity.where(id: bid["commodities_id"])[0]
        buyer = User.where(id: bid["buyer_id"])[0]
        temp = Hash.new
        temp[:first_name] = buyer.first_name
        temp[:product_name] = commodity.product_name
        temp[:quantity] = commodity.quantity
        temp[:amount] = calculated_price(bid["amount"], commodity.quantity)
        temp[:id] = bid["id"]
        transformed_list.push(temp)
       end

    transformed_list
  end

  def calculated_price(price, quantity)
     if price.nil?
       return 'free'
     else
       quantity * price
     end
  end
end
