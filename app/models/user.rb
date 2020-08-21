class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :buyers, class_name: 'Bid', foreign_key: 'buyer_id'
  has_many :sellers, class_name: 'Bid', foreign_key: 'seller_id'

  validate :allowed_type?, on: :create

 private

  def allowed_type? #rails may have updated its api
    ['buyer', 'seller'].include?(self.user_type)
    errors.add(:user_type, "user must be buyer or seller")
  end

end
