# album-finder

A Marionette.js front-end to [MuSAPI Music Search API](https://github.com/sonicblend/MuSAPI). My first Backbone + Marionette.js app.

MuSAPI searches multiple sources for album previews and returns them as JSON. album-finder takes requests, retrieves results from MuSAPI and presents as a single-page web application.

## Progress

- [x] Static version of site: view [preview](#design) / [html](https://github.com/sonicblend/album-finder/blob/master/static.html)
- [x] Dynamic site initialised with pre-populated model
- [x] Query results
  - [x] View populated by model
  - [ ] View as a composite model
- [x] Search history
  - [x] Search history delete entry
  - [ ] Query results visible within search history
- [ ] Data persistence
- [ ] REST API lookup
  - [ ] Add route to MuSAPI to provide results for all music services

## Design

The final app will look something like this:
![Static design](https://github.com/sonicblend/album-finder/blob/master/static.png)
