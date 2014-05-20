class TasksController < ApplicationController

  def new

  end

  def create
    
  end

  def update

  end

  def destroy
    
  end

private

  def tasks_params
    params.require(:task).permit(:name)
  end

end