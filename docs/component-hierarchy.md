# Component Hierarchy

**Home(Root)**

- HomeHeader
- HomeContent

**AuthFormContainer**

- AuthFormModal (or pop-out)
  - AuthForm (login / signup)

**UserContainer**

- UserProfileShow
  - UserProfileEdit

**Main**

- MainHeader
  - UserContainer
- NavBar
  - CollectionListContainer
- LatestNews
  - CollectionItemContainer
    - FeedListContainer

**CollectionListContainer**

- CollectionList
  - CollectionItem

**CollectionItemContainer**

- CollectionItem
  - CollectionEdit
  - CollectionDelete
    - FeedList

**FeedListContainer**

- FeedList
  - FeedItem

**FeedItemContainer**

- FeedItem
  - FeedImport
    - ArticleList

**ArticleListContainer**

- ArticleList
  - ArticleItem

**ArticleItemContainer**

- ArticleItem
  - ArticleSave
  - ArticleShare
  - ArticleViewed

**ActiveArticleModal**

- ArticleItemContainer

**ExploreContainer**

- ExploreHeader
- ExploreCategory

**ReadLaterContainer**

- ArticleListContainer

# Routes

Path                       | Component
---------------------------| ------------------------
"/"                        | "Landing Page (logged out)"
"/signup"                  | "AuthFormContainer"
"/login"                   | "AuthFormContainer"
"/account"                 | "UserContainer"
"/my"                      | "Main"
"/saved"                   | "ReadLaterContainer"
"/collections"             | "CollectionListContainer"
"/collections/:collection" | "CollectionItemContainer"
"/feeds"                   | "FeedListContainer"
"/feeds/:id"               | "FeedItemContainer"
"/feeds/:id/articles"      | "ArticleListContainer"
"/feeds/:id/articles/:id"  | "ArticleItemContainer"
"/import"                  | "FeedItemContainer"
"/explore"                 | "ExploreContainer"
