Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
