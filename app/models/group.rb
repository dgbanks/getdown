class Group < ApplicationRecord

  validates :name, :description, :location, :organizer_id, :category_id, presence: true
  # validates :name, uniqueness: true

  after_initialize :fix_png
  after_save :ensure_organizer_membership, on: :create
  # after_initialize :get_address
  # after_initialize :geocode, :get_address

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

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category

  def self.search(query)
    self.where(
      "name ILIKE ? OR
      description ILIKE ? OR
      location ILIKE ?",
       "%#{query}%", "%#{query}%", "%#{query}%").limit(3)
  end

  def fix_png
    url = self.img_url
    if url[0] == '/'
      self.img_url = 'https://secure.meetupstatic.com'.concat(url)
    end
  end

  def ensure_organizer_membership
    Membership.create({group: self, user: self.organizer})
  end

end

# def geocode
#   geocode = Geocoder.coordinates(self.zip_code)
#   self.latitude = geocode.first
#   self.longitude = geocode.last
# end

# def get_address
#   self.location = Geocoder.address(self.zip_code)
# end
