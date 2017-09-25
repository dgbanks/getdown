class User < ApplicationRecord

  validates :name, :email, :password_digest, :session_token, :location, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_token

  attr_reader :password

  has_many :membershps,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Membership

  has_many :groups,
    through: :membershps,
    source: :group

  has_many :groups_organized,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :Group

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    ((user && user.is_password?(password)) ? user : nil)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
