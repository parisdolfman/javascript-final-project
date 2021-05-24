Rails.application.routes.draw do
  resources :charities, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  resources :user_charities, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/charities' => 'charities#index'
  get '/users' => 'users#index'
  get '/sort_by_asc' => 'charities#sort_by_asc'
  get '/find_by_type'=> 'charities#find_by_type'
end
