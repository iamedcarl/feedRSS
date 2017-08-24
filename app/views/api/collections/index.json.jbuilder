@collections.each do |collection|
  json.set! collection.id do
    json.partial! 'api/collections/collection', collection: collection
  end
end
