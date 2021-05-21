class User < ApplicationRecord
    has_many :charities
    has_many :list_charities
    has_many :charities, through: :list_charities
end
