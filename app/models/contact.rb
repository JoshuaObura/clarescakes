class Contact < ApplicationRecord
  validates :name, presence: :true
    validates :email,
              presence: :true,
              format: {
                with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i,
                message: "must be a valid email address"
              }
    validates :message, presence: :true
end
