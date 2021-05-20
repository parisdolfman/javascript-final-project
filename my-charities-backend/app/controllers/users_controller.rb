class UsersController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        render json: user, except: [:created_at, :updated_at] 
    end

    def create
        user = User.find_or_create_by(name: params[:name])
        user.save
    end 

    private

    def user_params
        params.require(:user).permit(:name)
    end 
end
