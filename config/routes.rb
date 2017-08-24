Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resource :user, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :collections, except: [:new, :edit]
    resources :feeds, only: [:index, :show, :create, :destroy]
    resources :articles, only: [:index, :show, :create]
  end
end
