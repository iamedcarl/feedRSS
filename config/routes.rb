Rails.application.routes.draw do
  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/show'
  end

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
