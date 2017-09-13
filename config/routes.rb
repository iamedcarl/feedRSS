Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:show, :create] do
      get :saved_articles, on: :member
    end
    resource :session, only: [:create, :destroy]
    resources :collections, except: [:new, :edit] do
      get :articles, on: :member
    end
    resources :feeds, only: [:index, :show, :create, :update] do
      get :articles, on: :member
    end
    resources :articles, only: [:index, :show, :create, :update]
  end
end
