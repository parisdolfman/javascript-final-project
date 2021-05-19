class CharitiesController < ApplicationController

    def index
        charities = Charity.all
    end 

    def show
      charity = Charity.find_by(id: params[:id])
    end 

    private

    def charity_params
        params.require(:charity).permit(:name, :type, :image)
    end 

end
