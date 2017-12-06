class Event < ApplicationRecord

  validates :name, :description, :address, :venue, :date, :time, :group_id, :host_id, presence: true

  after_save :ensure_host_attendance, on: :create

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

  def ensure_host_attendance
    Rsvp.create({event: self, user: self.host})
  end
end
