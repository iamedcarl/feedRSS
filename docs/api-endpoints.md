# API Endpoints

## Root

- `GET /` - serves up `root.html`

---
## Session

- `POST /api/session` - login
- `DELETE /api/session` - logout

---
## User Account

- `POST /api/users` - signup
- `GET /api/users` - user account
- `GET /api/users/:id` - user profile
- `PATCH /api/users/:id` - update profile

---
## Collections

- `GET /api/collections` - all collections
- `GET /api/collections/:id` - show single collection
- `PATCH /api/collections/:id` - edit collection
- `POST /api/collections` - add/new collection
- `DELETE /api/collections/:id` - delete collection

---
## RSS Feeds

- `GET /api/feeds` - all feeds
- `GET /api/feeds/:id` - show single feed
- `POST /api/feeds` - add/new feed
- `DELETE /api/feeds/:id` - delete feed

---
## Articles

- `GET /api/articles` - all articles
- `GET /api/articles/:id` - show single article
