class UserCharitiesController < ApplicationController
    def create
      user_charity = UserCharity.find_by(user_id: params[:user_id], charity_id: params[:charity_id])
  
      if user_charity
        user_charity.destroy
      else
        user_charity = UserCharity.create user_id: params[:user_id], charity_id: params[:charity_id]
      end
  
      render json: UserSerializer.new(user_charity.user).serialized_json
    end
  end