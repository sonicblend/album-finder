var Music = new Marionette.Application();

Music.on("before:start", function(){
    var RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",

        regions: {
            search: "#search-region",
            history: "#main-region"
        },
    });

    Music.regions = new RegionContainer();
});

Music.on("start", function(){
    Music.SearchApp.New.Controller.showSearch();
    Music.HistoryApp.List.Controller.listHistory();
});
