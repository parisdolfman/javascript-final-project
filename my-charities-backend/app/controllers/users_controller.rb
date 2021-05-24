class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at]
    end

    def show
        user = User.includes(:user_charities).find_by(id: params[:id])
        render json: UserSerializer.new(user).serialized_json
    end

    def create
        user = User.find_or_create_by(email: params[:email])
        user.name = params[:name]
        user.save
        render json: UserSerializer.new(user).serialized_json
    end

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end
end
