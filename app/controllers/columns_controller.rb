class ColumnsController < ApplicationController
  respond_to :html, :json
  def index
    @columns = current_user.columns.all

    respond_with @columns
  end

  def new

  end

  def create
    @column = current_user.columns.build(column_params);

    respond_to do |format|
      if @column.save
        flash[:notice] = 'column was successfully created.'
        format.html { redirect_to columns_path }
        format.json { render json: @column }
      else
        format.html { render action: "new" }
        format.json { render json: @column }
      end
    end
  end

  def destroy

  end


private

  def column_params
    params.require(:column).permit(:name)
  end  

end