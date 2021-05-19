class Charity < ApplicationRecord
    belongs_to :user

    def sort_by_asc
      sort = Charity.all.sort_by{|charity| charity.name}
    end 

    def find_by_type
        find = Charity.all.select(type){|charity| charity.type == type}
    end 

end
