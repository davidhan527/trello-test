class User < ActiveRecord::Base
  has_many :columns
  has_secure_password

end