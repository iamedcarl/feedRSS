# FeedRSS Routes

Routes are a work in progress. Probably will trim it down to get the MVP
done.

## Frontend

- `/` - home
- `/my` - today feeds
- `/saved` - saved feeds
- `/latest` - all feeds
#### Collections
- `/category/:category` - feeds by category/collection
#### RSS Feeds
- `/subscription/:feed` - individual feed
- `/import` - import/add new rss feed
#### Articles
- `/entry/:article` - show individual article
#### User Account
- `/login` - login
- `/signup` - signup
- `/account` - manage account
- `/account/profile` - user profile

## Backend

- `GET /` - serves up our `root.html`
- `POST /session` - login
- `DELETE /session` - logout
- `POST /?` - signup
- `GET /?` -
- `GET /?` -
- `POST /?` -
- `GET /?` - 
