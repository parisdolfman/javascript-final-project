class ListsController < ApplicationController

    def index
        lists = List.all
        render json: lists, :except => [:created_at, :updated_at]
        render json: lists(:include => {
            :user => {:only => [:name]},
        }), :except => [:created_at, :updated_at]
    end
    
    def show
        list = List.find_by(id: params[:id])
        if list 
            render json: list(:include => {
                user: {:only => [:name]},
            }), except: [:created_at, :updated_at]
        else
            render json: {message: "List not found."}
        end 

    end 

    private

    def list_params
        params.require(:lists).permit(:user_id)
    end
end
