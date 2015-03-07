class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :name,  presence: true
  validates :email,
            :presence => {:message => "Enter your email address!" },
            :format => { :with => VALID_EMAIL_REGEX, :message => " is not valid!"},
            :uniqueness => {:case_sensitive => false, :message => " already exists!"}
  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(password)
    self.password == password
  end
end
