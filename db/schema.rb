# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170904020708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title", null: false
    t.text "content"
    t.datetime "date", null: false
    t.string "url", null: false
    t.string "image_url"
    t.integer "feed_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "author"
    t.string "entry_id", null: false
    t.index ["feed_id"], name: "index_articles_on_feed_id"
  end

  create_table "collected_feeds", force: :cascade do |t|
    t.integer "collection_id", null: false
    t.integer "feed_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collection_id", "feed_id"], name: "index_collected_feeds_on_collection_id_and_feed_id", unique: true
    t.index ["collection_id"], name: "index_collected_feeds_on_collection_id"
    t.index ["feed_id"], name: "index_collected_feeds_on_feed_id"
  end

  create_table "collections", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "feeds", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "rss_url", null: false
    t.string "icon_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "url", null: false
  end

  create_table "saved_articles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "article_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_saved_articles_on_article_id"
    t.index ["user_id", "article_id"], name: "index_saved_articles_on_user_id_and_article_id", unique: true
    t.index ["user_id"], name: "index_saved_articles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "img_url"
    t.string "fname"
    t.string "lname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
