class TasksController < ApplicationController
  respond_to :html, :json

  def index
    @tasks = Task.all
    @columns = current_user.columns.all
    respond_with @tasks
  end

  def new

  end

  def create
    @task = Task.new(task_params)
    respond_to do |format|
      if @task.save
        flash[:notice] = 'task was successfully created.'
        format.html { redirect_to tasks_path }
        format.json { render json: @task }
      else
        format.html { render action: "new" }
        format.json { render json: @task }
      end
    end
  end

  def update

  end

  def destroy
    
  end

private

  def task_params
    params.require(:task).permit(:name)
  end

end