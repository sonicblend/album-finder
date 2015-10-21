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

//    Music.StaticView = Marionette.ItemView.extend({
//        template: "#results-empty"
//    }

//    Music.ResultView = Marionette.ItemView.extend({
//        template: "#results-open"
//    });

Music.on("start", function(){
//        var eska = new Music.Result({
//            query: "ESKA - Eska",
//            deezer: {
//                artist: "Eska",
//                title: "Eska",
//                link: "http://www.deezer.com/album/9535910",
//                id: "9535910",
//            },
//            bandcamp: {
//                artist: "ESKA",
//                title: "ESKA",
//                link: "https://eskaonline.bandcamp.com/album/eska",
//                id: "350367951",
//            },
//        });

    Music.HistoryApp.List.Controller.listHistory();

//        var eskaView = new Music.ResultView({
//            model: eska
//        });
//        var staticView = new Music.StaticView();
//        Music.regions.main.show(staticView);
});
