# album-finder

A Marionette.js front-end to [MuSAPI Music Search API](https://github.com/sonicblend/MuSAPI). My first Backbone + Marionette.js app.

MuSAPI searches multiple sources for album previews and returns them as JSON. album-finder takes requests, retrieves results from MuSAPI and presents as a single-page web application.

## Progress

- [x] Static preview: view [preview](#design) / [html](https://github.com/sonicblend/album-finder/blob/master/static.html)
- [x] Dynamic site
  - [x] Model
    - [x] Pre-populated from array (temporary)
    - [ ] History data persistence
  - [x] View
    - [x] Search history view
    - [x] Query results view
      - [ ] View as a composite model
      - [ ] View inline with search history results
  - [x] Controller
    - [x] Search history delete entry
    - [ ] REST API lookup
      - [ ] Dependency: Add route to MuSAPI to provide results for all music services

## Design

The final app will look something like this:
![Static design](https://github.com/sonicblend/album-finder/blob/master/static.png)
