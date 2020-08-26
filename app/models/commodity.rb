class Commodity < ApplicationRecord
  belongs_to :user
  belongs_to :bids , optional: true
end
