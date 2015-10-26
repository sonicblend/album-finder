# album-finder

A Marionette.js front-end to [MuSAPI Music Search API](https://github.com/sonicblend/MuSAPI). My first Backbone + Marionette.js app.

MuSAPI searches multiple sources for album previews and returns them as JSON. album-finder takes requests, retrieves results from MuSAPI and presents as a single-page web application.

## Progress

- [x] Static preview: [see history](https://github.com/sonicblend/album-finder/blob/master/screenshots/static.png)
- [x] Dynamic site
  - [x] Model
    - [x] Pre-populated from array (temporary)
    - [x] Search history data persistence
  - [x] View
    - [x] Query results
    - [x] Search history
  - [x] Controller
    - [x] Search history delete entry
    - [x] Add new query to history collection
    - [x] REST API lookup
      - [x] Dependency: Scrape Bandcamp for id, artist name etc
      - [x] Dependency: Add route to MuSAPI to provide results for all music services
    - [x] Display welcome text when history collection empty
  - [ ] Routing
    - [ ] Routing for non-existant pages
  - [x] Host site

## Screenshots of current version

User visits site for first time:

![User visits site for first time](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_welcome.png)

User searches for a couple albums:

![User searches for a couple albums](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_history_closed.png)

User opens query result to view previews, when found - note the delete icon that appears when hovering over:

![User opens query result to view previews, when found](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_history_open.png)

User deletes a result:

![User deletes the query](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_deleted.png)
