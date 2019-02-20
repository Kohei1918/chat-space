class Message < ApplicationRecord
  belong_to :group
  belong_to :user
  has_many :messsages
  mount_uploader :image, ImageUploader
  validates :content, presence: true, unless: :image?
end
