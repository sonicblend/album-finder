Music.module("Entities", function(Entities, Music, Backbone, Marionette, $, _){
    Entities.Result = Backbone.Model.extend({
        urlRoot: "history",
    });

    Entities.configureStorage("Music.Entities.Result");

    Entities.ResultCollection = Backbone.Collection.extend({
        url: "history",
        model: Entities.Result
    });

    Entities.configureStorage("Music.Entities.ResultCollection");

    var initialiseHistory = function() {
        var history = new Entities.ResultCollection([{
            id: 1,
            closed: 1,
            query: "Liquid Stranger - The Intergalactic Slapstick",
            deezer: {
                title: "The Intergalactic Slapstick",
                artist: "Liquid Stranger",
                link: "https://www.deezer.com/album/1017537",
                id: "1017537",
            },
            bandcamp: {
                title: "The Intergalactic Slapstick",
                artist: "Liquid Stranger",
                link: "https://liquidstranger.bandcamp.com/album/the-intergalactic-slapstick",
                id: "4283774662",
            },
        },{
            id: 2,
            closed: 1,
            query: "C Duncan – Architect",
            deezer: {
                title: "Architect",
                artist: "C Duncan",
                link: "https://www.deezer.com/album/10787960",
                id: "10787960",
            },
            bandcamp: {
                not_found: 1,
            },
        }]);

        history.forEach(function(result){
            result.save();
        });
        return history;
    };

    var API = {
        getHistoryEntities: function(){
            var history = new Entities.ResultCollection();
            history.fetch();
            if(history.length === 0){
                // create some search history for the demo
                return initialiseHistory();
            }
            return history;
        }
    };

    Music.reqres.setHandler("history:entities", function(){
        return API.getHistoryEntities();
    });
});
