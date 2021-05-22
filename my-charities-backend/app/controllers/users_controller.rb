class UsersController < ApplicationController

    def index
        user = User.all
        render json: user, except: [:created_at, :updated_at] 
    end

    def show 
        user = User.find_by(id: params[:id])
        render json: user, except: [:created_at, :updated_at] 
    end 

    def create
        user = User.find_or_create_by(email: params[:email])
        user.name = params[:name]
        user.save
        render json: user
    end 

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end 
end
