class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    @current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def ensure_user_logged_in
  end

end
