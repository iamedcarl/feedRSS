# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  content    :text             not null
#  date       :date             not null
#  url        :string           not null
#  viewed     :boolean          default(FALSE), not null
#  image_url  :string
#  user_id    :integer          not null
#  feed_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Articles < ApplicationRecord
  validates :title, :content, :date, :url, presence: true
  validates :viewed, inclusion: { in: [true, false] }
  validates :user_id, :feed_id, presence: true

  belongs_to :user
  belongs_to :feed

end
