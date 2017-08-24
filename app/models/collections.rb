# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collections < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :feeds

end
