Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    ##is this right ???
    post 'groups/search', to: 'groups#search'
    ##
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :update] do
      resources :categories, only: [:index]
      resources :groups, only: [:index]
      resources :events, only: [:index]
    end

    resources :categories, only: [:index, :show] do
      resources :subscriptions, only: [:create, :destroy]
      resources :groups, only: [:index]
      resources :events, only: [:index]
    end

    resources :groups, only: [:create, :index, :show, :update, :destroy] do
      resources :memberships, only: [:create, :destroy]
      resources :events, only: [:create, :index]
    end

    resources :events, only: [:index, :update, :destroy, :show] do
      resources :rsvps, only: [:create, :destroy]
    end

  end
end
