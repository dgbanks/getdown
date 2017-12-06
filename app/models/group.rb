class Group < ApplicationRecord

  validates :name, :description, :location, :organizer_id, :category_id, presence: true

  after_initialize :fix_png
  after_save :ensure_organizer_membership, on: :create

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
       "%#{query}%", "%#{query}%", "%#{query}%").limit(20)
  end

  def fix_png
    if self.img_url
      url = self.img_url
      if url[0] == '/'
        self.img_url = 'https://secure.meetupstatic.com'.concat(url)
      end
    end
  end

  def ensure_organizer_membership
    Membership.create({group: self, user: self.organizer})
  end

end
