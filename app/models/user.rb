class User < ActiveRecord::Base
  has_many :boards
  has_secure_password

end