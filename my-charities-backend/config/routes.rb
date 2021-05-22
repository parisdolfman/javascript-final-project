Rails.application.routes.draw do
  resources :list_charities, only: [:index, :create, :destroy, :show]
  resources :lists, only: [:index, :show]
  resources :charities, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/charities' => 'charities#index'
  get '/users' => 'users#index'
  get '/sort_by_asc' => 'charities#sort_by_asc'
  get '/find_by_type'=> 'charities#find_by_type'
end
