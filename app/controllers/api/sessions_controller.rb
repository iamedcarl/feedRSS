class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:password][:password]
    )

    if @user
      login(@user)
      render 'api/user'
    else
      render json: ['Invalid username or password'], status: 422
    end
  end

  def destroy
    logout!
    if session[:session_token].nil?
      render 'api/user'
    else
      render json: ["Not logged in"], status: 404
    end
  end
end
