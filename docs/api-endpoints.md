# feedRSS API Endpoints

Routes are a work in progress. Probably will trim it down to get the MVP
done.

## ?

#### Frontend
- `/` - home/today feeds
- `/my` - today feeds
- `/saved` - saved feeds
- `/latest` - all feeds

#### Backend
- `GET /` - serves up `root.html`
- `GET /` - serves up `root.html`
- `GET /` - serves up `root.html`
- `GET /` - serves up `root.html`

---
## Session
#### Frontend
- `/login` - login

#### Backend
- `POST /api/session` - login
- `DELETE /api/session` - logout

---
## User Account
#### Frontend
- `/signup` - signup
- `/account` - user account
- `/account/profile` - user profile

#### Backend
- `POST /api/users` - signup
- `GET /api/users` - user account
- `GET /api/users/:id` - user profile

---
## Collections
#### Frontend
- `/collections` - all collections (a.k.a. categories)
- `/collections/:id` - feeds by collection

#### Backend
- `GET /api/collections` - all collections
- `GET /api/collections/:id` - show individual collection
- `POST /api/collections` - add/new collection
- `DELETE /api/collection` - delete collection

---
## RSS Feeds
#### Frontend
- `/feeds` - import/add new rss feed
- `/feeds/:id` - show individual feed

#### Backend
- `GET /api/feeds` - all feeds
- `GET /api/feeds/:id` - show individual feed
- `POST /api/feeds` - add/new feed
- `DELETE /api/feed` - delete feed

---
## Articles
#### Frontend
- `/entry/:article` - show individual article

#### Backend
