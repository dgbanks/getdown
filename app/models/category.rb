class Category < ApplicationRecord

  validates :name, presence: true, uniqueness: true

  has_many :groups,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Group

  has_many :subscriptions,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Subscription

  has_many :subscribers,
    through: :subscriptions,
    source: :user

end
