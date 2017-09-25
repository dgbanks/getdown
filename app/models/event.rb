class Event < ApplicationRecord

  validates :name, :description, :location, :date, :time, :group_id, presence: true

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Rsvp

  has_many :attendees,
    through: :rsvps,
    source: :user

end
