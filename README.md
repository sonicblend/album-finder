# album-finder

A Marionette.js front-end to [MuSAPI Music Search API](https://github.com/sonicblend/MuSAPI). My first Backbone + Marionette.js app.

MuSAPI searches multiple sources for album previews and returns them as JSON. album-finder takes requests, retrieves results from MuSAPI and presents as a single-page web application.

## Progress

- [x] Static preview: view [preview](https://github.com/sonicblend/album-finder/blob/master/screenshots/static.png)
- [x] Dynamic site
  - [x] Model
    - [x] Pre-populated from array (temporary)
    - [ ] Search history data persistence
  - [x] View
    - [x] Query results
    - [x] Search history
  - [x] Controller
    - [x] Search history delete entry
    - [ ] Add new query to history collection
    - [ ] REST API lookup
      - [x] Dependency: Scrape Bandcamp for id, artist name etc
      - [ ] Dependency: Add route to MuSAPI to provide results for all music services
    - [ ] Display welcome text when history collection empty
  - [ ] Routing
    - [ ] Routing for non-existant pages
  - [ ] Host site

## Screenshots of current version

User revists site with search history visible:

![User revists site with search history visible](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_history_closed.png)

User opens an item from their history:

![User opens an item from their history](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_history_open.png)

User hovers over item to display delete button:

![User hovers over item to display delete button](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_delete_hover.png)

User deletes item from history:

![User deletes item from history](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_deleted.png)

User deletes all items from history:

![User deletes all items from history](https://github.com/sonicblend/album-finder/blob/master/screenshots/album_finder_no_history.png)
