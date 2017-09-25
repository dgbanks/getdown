Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :index, :show, :update, :destroy] do
      resources :memberships, only: [:create, :destroy]
      resources :events, only: [:create, :update, :destroy, :index]
    end
    resources :events, only: [:index, :show] do
      resources :rsvps, only: [:create, :destroy]
    end
  end
end
