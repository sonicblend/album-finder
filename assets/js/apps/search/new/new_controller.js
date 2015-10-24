Music.module("SearchApp.New", function(New, Music, Backbone, Marionette, $, _){
    New.Controller = {
        showSearch: function(){
            var staticView = new New.Search();
            staticView.render();
        },
        fetch: function(query){
            var newQuery = new Music.Entities.Result({});

            newQuery.fetch(query, { success: function() {
                console.log("result: ", newQuery.toJSON());

                var history = Music.request("history:entities");
                history.create(newQuery);
            }});
        },
    };
});
