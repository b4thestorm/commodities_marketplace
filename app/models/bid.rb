class Bid < ApplicationRecord
  belongs_to :buyer, class_name: user
  belongs_to :seller, class_name: user
  has_many :commodities
end
