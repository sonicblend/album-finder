Music.module("QueryApp.Show", function(Show, Music, Backbone, Marionette, $, _){
    Show.Controller = {
        showQuery: function(model){
            var queryView = new Show.Query({
                model: model,
            });

            Music.regions.main.show(queryView);
        }
    };
});
