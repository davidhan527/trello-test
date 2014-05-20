class SessionController < ApplicationController

  def new

  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "welcome #{user.name}, sign in successful"
    else
      render :new, alert: "error logging in"
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "successfully logged out"
  end

end