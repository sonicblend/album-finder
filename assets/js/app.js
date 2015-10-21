var Music = new Marionette.Application();

Music.on("before:start", function(){
    var RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",

        regions: {
            main: "#main-region"
        },
    });

    Music.regions = new RegionContainer();
});

Music.on("start", function(){
    Music.HistoryApp.List.Controller.listHistory();
});
