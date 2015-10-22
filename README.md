# album-finder

A Marionette.js front-end to [MuSAPI Music Search API](https://github.com/sonicblend/MuSAPI). My first Backbone + Marionette.js app.

MuSAPI searches multiple sources for album previews and returns them as JSON. album-finder takes requests, retrieves results from MuSAPI and presents as a single-page web application.

## Progress

- [x] Static preview: view [preview](#design) / [html](https://github.com/sonicblend/album-finder/blob/master/static.html)
- [x] Dynamic site
  - [x] Model
    - [x] Pre-populated from array (temporary)
    - [ ] Search history data persistence
  - [x] View
    - [x] Query results
    - [x] Search history
  - [x] Controller
    - [x] Search history delete entry
    - [ ] Add query to model
    - [ ] REST API lookup
      - [x] Dependency: Scrape Bandcamp for id, artist name etc
      - [ ] Dependency: Add route to MuSAPI to provide results for all music services

## Design

The final app will look something like this:
![Static design](https://github.com/sonicblend/album-finder/blob/master/static.png)
