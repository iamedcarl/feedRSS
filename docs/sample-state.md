```js
{
  user: {
    id: 1,
    username: 'rickjames',
    name: 'Rick James'
  },

  collections: {
    1: {
      id: 1,
      title: 'News',
      feed_ids: [1, 2]
    }
  },

  feeds: {
    1: {
      id: 1,
      title: 'Gothamist',
      category: 'News',
      article_id: [1, 6, 3]
    },
    2: {
      id: 2,
      title: 'New York Post',
      category: 'News',
      article_id: [4, 9, 10, 12]
    }
  },

  articles: {
    1: {
      id: 1,
      title: 'The Cheetos Restaurant Has 1,000 Person Waitlist',
      body: 'Will Cheetos dethrone Doritos as Frito-Lay's most marketable and gimmicky snack?
      date: 'Mon, 16 August 2017 09:00:00 EST',
    }
  }
}
```
