class Category < ApplicationRecord

  validates :name, presence: true, uniqueness: true

  after_initialize :get_img

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

  def get_img
    case self.name
    when 'Outdoors & Adventure'
      self.img_url = 'https://images.unsplash.com/photo-1494698068553-a3d17778b986?auto=format&fit=crop&w=1502&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Tech'
      self.img_url = 'https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?auto=format&fit=crop&w=979&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Family'
      self.img_url = 'https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Health & Wellness'
      self.img_url = 'https://images.unsplash.com/photo-1500984932646-e94f38512bc9?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Sports & Fitness'
      self.img_url = 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Learning'
      self.img_url = 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1055&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Photography'
      self.img_url = 'https://images.unsplash.com/photo-1492296321694-94921f1ba9f7?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Food & Drink'
      self.img_url = 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Writing'
      self.img_url = 'https://images.unsplash.com/photo-1496389429868-ef51f7140b1e?auto=format&fit=crop&w=1029&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Language & Culture'
      self.img_url = 'https://images.unsplash.com/photo-1508642207-7048c482ba7e?auto=format&fit=crop&w=1036&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Music'
      self.img_url = 'https://images.unsplash.com/photo-1496369654500-4f0caba0ecfa?auto=format&fit=crop&w=1189&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    when 'Movements'
      self.img_url = 'https://images.unsplash.com/photo-1511898634545-c01af8a54dd5?auto=format&fit=crop&w=1120&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    end
  end

end
