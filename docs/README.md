# feedRSS

[Heroku link][heroku] **Note:** TBD

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/RVGW0ZSR/feedrss

## Minimum Viable Product

feedRSS is a web application inspired by Feedly built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] *Collections* that will contain RSS feeds by category
- [ ] Add or follow *RSS feeds* to collections
- [ ] Show list of *articles* from RSS feeds
- [ ] *Read*, save and track articles
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Homepage, Backend setup, and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication. Basic rendering of homepage, login, and signup page.

### Phase 2: RSS Feeds and Articles (2 days)

**Objective:** RSS Feeds and articles in the database are being updated in realtime and can be accessed through the API.

### Phase 3: Collections, Feed Display (2 days)

**Objective:** Collections can be created, edited and deleted. Each collection can have RSS feeds added to them. Feed display will be a list showing title and preview of article.

### Phase 4: Add/Explore Feeds (1 days)

**Objective:** Ability to add new feeds or explore from existing feeds.

### Phase 5: Latest Articles of the Day (.5 day)

**Objective:** Once user logs in, it directs to homepage showing latest articles of the day from all feeds.

### Phase 6: Ability To Save Articles Or Copy Article Link (.5 day)

**Objective:** User can save articles to read later or copy link to share.

### Phase 7: Articles Display (1 day)

**Objective:** Individual articles can be previewed from list of feeds with link to actual article and options to save for later or copy link. The article display slides out from the right side of the page when clicking on article from homepage.  

### Bonus Features (TBD)
- [ ] Favorites
- [ ] Search
- [ ] Account Management
- [ ] Share article
