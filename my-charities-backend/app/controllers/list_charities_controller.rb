class ListCharitiesController < ApplicationController

    def index
        list_charities = ListCharity.all
        render json: list_charities, except: [:created_at, :updated_at]
    end 

    def create 
        list_charity = ListCharity.create(list_charity_params)
        list = List.find(list_charity_params[:list_id])
        user = list.user

        render json: user, :include => {
            lists: {
                except: [:created_at, :updated_at], 
                include: {
                    list_charities:{ 
                        include: :charity
                }},
            }
        }, except: [:created_at, :updated_at]
    end 

    def destroy 
        list_charity = ListCharity.find(params[:id])
        user = list_charity.list.user
        list_charity.destroy
        
        render json: user, :include => {
            lists: {
                except: [:created_at, :updated_at], 
                include: {
                    list_charities:{ 
                        include: :charity
                }},
            }
        }, except: [:created_at, :updated_at]
    end
    
    private
    
    def list_charity_params
        params.require(:list_charity).permit(:list_id, :charity_id)
    end 
end
