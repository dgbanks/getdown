Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :groups, only: [:index]
      resources :events, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :index, :show, :update, :destroy] do
      resources :memberships, only: [:create, :destroy]
      resources :events, only: [:create, :index]
    end
    resources :events, only: [:index, :update, :destroy, :show] do
      resources :rsvps, only: [:create, :destroy]
    end
  end
end
