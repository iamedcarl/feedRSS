@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection,
                  :id,
                  :title,
                  :user_id,
                  :feed_ids
  end
end
