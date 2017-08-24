# == Schema Information
#
# Table name: feeds
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  rss_url     :string           not null
#  icon_url    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Feeds < ApplicationRecord
  validates :title, :description, :rss_url

  has_many :collections
  has_many :articles, dependent: :destroy

end
