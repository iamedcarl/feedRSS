```js
{
  session: {
    id: 1,
    username: 'rickjames@haha.com',
    fname: 'Rick',
    lname: 'James',
    img_url: '/pic.png',
  },

  collections: {
    1: {
      id: 1,
      title: 'News',
      feed_ids: [1, 2],
      user_id: 1,
    }
  },

  feeds: {
    1: {
      id: 1,
      title: 'Gothamist',
      description: 'Gothamist is a website about New York.',
      rss_url: 'http://feeds.gothamistllc.com/gothamist05',
      icon_url: 'http://assets.gothamistllc.com/images/spacer.gif',
      collection_id: 1,
    },
    2: {
      id: 2,
      title: 'New York Post',
      description: 'Your source for breaking news, news about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more.',
      rss_url: 'http://nypost.com/feed/',
      icon_url: 'http://nypdigital.com/webassets/icons/flipboard.png',
      collection_id: 1,
    }
  },

  articles: {
    1: {
      id: 1,
      title: 'The Cheetos Restaurant Has 1,000 Person Waitlist',
      content: 'Will Cheetos dethrone Doritos as Frito-Lay's most marketable and gimmicky snack?
      date: 'Mon, 16 August 2017 09:00:00 EST',
      url: 'www.fakenews.com',
      image_url: 'www.picspicspics.com',
      viewed: false,
      feed_id: 3,
      user_id: 2,
    }
  },

  ui: {
    errors: [],
  }
}
```
