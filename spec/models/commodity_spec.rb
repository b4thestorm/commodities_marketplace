require 'rails_helper'

RSpec.describe Commodity, type: :model do
  context 'create commodity' do
    let (:user) {User.create(first_name: 'tester', password: 'faking', password_confirmation: 'faking', user_type: 'seller', email: 'testing@example.com')}

    it 'should create a new commodity with an associated seller' do
     commodity = Commodity.new(price: 100, quantity: 2, product_name: 'corn', user_id: user.id).save
     expect(commodity).to eq(true)
    end

  end
end
