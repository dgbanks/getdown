class Event < ApplicationRecord

  validates :name, :description, :address, :venue, :date, :time, :group_id, :host_id, presence: true

  # after_initialize :parse_date
  after_save :ensure_host_attendance, on: :create

  # after_initialize :geocode

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group

  has_one :category,
    through: :group,
    source: :category

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Rsvp

  has_many :attendees,
    through: :rsvps,
    source: :user

  # def parse_date
  #   date = self.date
  #
  #   self.date = date.to_date
  #   # self.date = date.strftime("%B %d, %Y")
  # end

  def ensure_host_attendance
    Rsvp.create({event: self, user: self.host})
  end
end

# def geocode
#   geocode = Geocoder.coordinates(self.location)
#   self.latitude = geocode.first
#   self.longitude = geocode.last
# end
