class Board < ActiveRecord::Base
  has_many :tasks
  belongs_to :users

end