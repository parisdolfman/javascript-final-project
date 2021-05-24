class CharitiesController < ApplicationController
  require 'pry'
  
      def index
          charities = Charity.all
          render json: charities, except: [:created_at, :updated_at]
      end 
  
      def show
        charity = Charity.find_by(id: params[:id])
        if charity
          render json: charities, except: [:created_at, :updated_at]
          render json: sort
          render json: find
        else 
          render json: {message: "Charity not located."}
        end 
      end 
  
      private
  
      def charity_params
          params.require(:charity).permit(:name, :image, :category)
      end 
  
  end