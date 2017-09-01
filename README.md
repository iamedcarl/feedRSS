# feedRSS

[feedRSS live][heroku]

[heroku]: https://thefeedrss.herokuapp.com/

feedRSS is an RSS reader application inspired by [Feedly].

[Feedly]: https://www.feedly.com/

It is a full-stack web application that utilizes:
- Ruby on Rails on the backend,
- a PostgreSQL database, and
- React on the frontend with Redux.

It uses [Feedjira] ruby gem for fetching and parsing the XML content from RSS feeds and [Clearbit Free Logo API] to get high-quality logos.

[Feedjira]: http://feedjira.com/
[Clearbit Free Logo API]: https://clearbit.com/logo

## Features

### Easy navigation
Users are immediately taken to a view of the most recent articles from all the feeds that are being followed. From here, the user is able to navigate to their collections, feeds they're subscribed to, click on articles to read them directly, or discover new feeds to follow.

![MainPage](https://s3.us-east-2.amazonaws.com/feedrss-pro/today.png)

### Creating collections and following feeds
Collections are a way for the user to organize the feeds that are being followed into specified categories. It can be created, edited, and deleted according to the user's preference.

Clicking on the "Follow" button will bring up the options to create a collection or add the feed to an existing collection.

![Follow](https://s3.us-east-2.amazonaws.com/feedrss-pro/follow.png)

Since a feed may belong to many collections of different users, the handle for unfollowing had to pass in all `collection_ids` from the feed and remove only the current user's collections while maintaining other user's collection-feed relationships.

```js
// frontend/components/feed/follow_button.jsx

handleUnfollow(e) {
  let feedCollectionIds = this.props.feed.collection_ids;
  this.props.collectionIds.forEach(collectionId => {
    feedCollectionIds.forEach((feedCollectionId, idx) => {
      if(collectionId === feedCollectionId) {
        feedCollectionIds.splice(idx,1);
      }
    });
  });
  this.setState({ target: "", collection_ids: feedCollectionIds }, () => {
    this.props.updateFeed(this.state)
      .then(data => {
        this.props.history.push(`/discover`);});
  });
}
```

### Article creation
Articles are created during the fetching and parsing of an RSS Feed url and stored in database with the appropriate parameters. There is also a check to make sure articles are not duplicated during the updating for feeds by [Feedjira].

```ruby
# app/models/article.rb

def self.create_articles(entries, feed)
  entries.each do |entry|
    next if Article.find_by(entry_id: entry.id)
    img = entry.image ||
          Article.parse_img_from_content(entry.content) ||
          Article.parse_img_from_content(entry.summary)
    Article.create!(
      author: entry.author,
      content: entry.content || entry.summary,
      date: entry.published || DateTime.now,
      entry_id: entry.entry_id,
      feed_id: feed.id,
      image_url: img,
      title: entry.title,
      url: entry.url,
    )
  end
end
```

### Article view
When a user clicks on an article, the view page will slide out from the right to provide focus on the article.

![Article View](https://s3.us-east-2.amazonaws.com/feedrss-pro/article_show.png)

## Resources
- [Database Schema]
- [State]

[Database Schema]: https://github.com/iamedcarl/feedRSS/blob/master/docs/schema.md
[State]: https://github.com/iamedcarl/feedRSS/blob/master/docs/sample-state.md

## Additional Notes

### Rake task for updating feeds
Since this is a personal project, feeds are not being updated automatically yet. To update via command line, simply run `rake feeds:update`.

### Work in progress
- Article view page should only overlay on top of the previous page.
- User settings page
- Search functionality
- Parsing through the embedded HTML to render a cleaner article show page
- Saved articles for reading later
