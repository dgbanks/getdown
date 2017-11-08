class Group < ApplicationRecord

  validates :name, :description, :zip_code, :organizer_id, :latitude, :longitude, :location, presence: true
  validates :name, uniqueness: true

  after_save :ensure_organizer_membership, on: :create

  after_initialize :geocode, :get_address

  has_many :membershps,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Membership

  has_many :members,
    through: :membershps,
    source: :user

  belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :User

  has_many :events,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Event


  def self.search(query)
    self.where(
      "name ILIKE ? OR
      description ILIKE ? OR
      location ILIKE ?",
       "%#{query}%", "%#{query}%", "%#{query}%")
  end

  def geocode
    geocode = Geocoder.coordinates(self.zip_code)
    self.latitude = geocode.first
    self.longitude = geocode.last
  end

  def get_address
    self.location = Geocoder.address(self.zip_code)
  end

  def ensure_organizer_membership
    Membership.create({group: self, user: self.organizer})
  end

end
