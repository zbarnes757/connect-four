class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :name, :password_hash, presence: true
  validates :email,
            :presence => {:message => "Enter your email address!" },
            :format => { :with => VALID_EMAIL_REGEX, :message => "Enter a valid Email address !"},
            :uniqueness => {:case_sensitive => false, :message => "Email already exists!"}
  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
