class Group < ApplicationRecord

  validates :name, :description, :location, :organizer_id, presence: true
  validates :name, uniqueness: true

  has_many :membershps,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Membership

  has_many :users,
    through: :membershps,
    source: :user

end
