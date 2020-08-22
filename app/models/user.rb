class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::ActiveRecordSupport
  include DeviseTokenAuth::Concerns::User

  has_many :buyers, class_name: 'Bid', foreign_key: 'buyer_id'
  has_many :sellers, class_name: 'Bid', foreign_key: 'seller_id'
  has_many :commodity

  validate :allowed_type?, on: :create


 private

  def allowed_type?
    if ['buyer', 'seller'].include?(self.user_type) == false
      errors.add(:user_type, "user must be buyer or seller")
    end
  end

end
