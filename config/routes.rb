Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resource :user, only: [:new, :create, :show]
    resource :session, only: [:new, :create, :destroy]
  end
end
