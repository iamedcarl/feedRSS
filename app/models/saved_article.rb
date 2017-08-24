# == Schema Information
#
# Table name: saved_articles
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  article_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SavedArticle < ApplicationRecord
  validates :user_id, uniqueness: { scope: :article_id }

  belongs_to :user
  belongs_to :article
end
