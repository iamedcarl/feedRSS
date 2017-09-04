class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(current_user.id)
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :fname,
      :lname,
      :img_url,
      article_ids: []
    )
  end

end
