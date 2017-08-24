# Schema Information

## users

column name     | data type | details
--------------- | --------- | -------------------------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique, case-insensitive
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
img_url         | string    |
firstname       | string    |
lastname        | string    |

- **has_many** :collections
- **has_many** :articles

## collections

column name | data type | details
----------- | --------- | ------------------------------
id          | integer   | not null, primary key
title       | string    | not null
user_id     | integer   | not null, foreign_key, indexed

- **belongs_to** :user
- **has_many** :feeds through :collection_feeds

## collection_feeds

column name   | data type | details
------------- | --------- | --------------------------------------------------------------
id            | integer   | not null, primary key
collection_id | integer   | not null, foreign_key (collections), indexed, unique [feed_id]
feed_id       | integer   | not null, foreign_key (feeds), indexed, unique [collection_id]

- **belongs_to** :collection
- **belongs_to** :feed

## feeds

column name | data type | details
----------- | --------- | ----------------------------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    | not null
rss_url     | string    | not null
icon_url    | string    |

- **has_many** :collections through :collection_feeds
- **has_many** :articles

## articles

column name | data type | details
----------- | --------- | --------------------------------------
id          | integer   | not null, primary key
title       | string    | not null
content     | text      | not null
date        | date      | not null
url         | string    | not null
image_url   | string    |
viewed      | boolean   | not null, default false
user_id     | integer   | not null, foreign key (users), indexed
feed_id     | integer   | not null, foreign key (feed), indexed

- **belongs_to** :user
- **belongs_to** :feed
