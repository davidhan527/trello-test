class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(users_params)

    if @user.save
      redirect_to root_path, notice: "user successfully created"
    else
      render :new, alert: "error"
    end
    
  end

private

  def users_params
    params.require(:user).permit(:name, :password, :password_confirmation, :email);
  end


end