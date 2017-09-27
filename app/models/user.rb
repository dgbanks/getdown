class User < ApplicationRecord

  validates :name, :email, :password_digest, :session_token, :zip_code, :latitude, :longitude, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_token, :geocode

  attr_reader :password

  ### Group Associations

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

  ### Event Associations

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Rsvp

  has_many :appearances,
    through: :rsvps,
    source: :event

  has_many :events_hosted,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Event

  ##### Methods #####

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

  def geocode
    geocode = Geocoder.coordinates(self.zip_code)
    self.latitude = geocode.first
    self.longitude = geocode.last
  end
end
