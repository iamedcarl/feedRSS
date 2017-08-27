```js
{
  session: {
    collection_ids: [1, 2]
    fname: 'Rick',
    id: 1,
    img_url: '/pic.png',
    lname: 'James',
    username: 'demo@haha.com',
  },

  collections: {
    1: {
      feed_ids: [1, 2],
      id: 1,
      title: 'News',
      user_id: 1
    }
  },

  feeds: {
    1: {
      article_ids: [11, 53, 67, 90, 100]
      collection_id: 1,
      description: 'Gothamist is a website about New York.',
      icon_url: 'http://assets.gothamistllc.com/images/spacer.gif',
      id: 1,
      rss_url: 'http://feeds.gothamistllc.com/gothamist05',
      title: 'Gothamist',
    },
    2: {
      article_ids: [1, 4, 6, 7]
      collection_id: 1,
      description: 'Your source for breaking news, news about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more.',
      icon_url: 'http://nypdigital.com/webassets/icons/flipboard.png',
      id: 2,
      rss_url: 'http://nypost.com/feed/',
      title: 'New York Post',
    }
  },

  articles: {
    1: {
      author: 'John Doe'
      content: 'Will Cheetos dethrone Doritos as Frito-Lay's most marketable and gimmicky snack?
      date: 'Mon, 16 August 2017 09:00:00 EST',
      entry_id: 'http://www.articlesite.com/12',
      feed_id: 3,
      id: 1,
      image_url: 'www.picspicspics.com',
      saved: false,
      title: 'The Cheetos Restaurant Has 1,000 Person Waitlist',
      url: 'www.fakenews.com',
      viewed: false
    },
    latest_artricles: []
  },

  ui: {
    errors: []
  }
}
```
