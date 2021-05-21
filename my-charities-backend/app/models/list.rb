class List < ApplicationRecord
    belongs_to :user
    has_many :list_charities
    has_many :charities, through: :list_charities
end
