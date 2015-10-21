Music.module("Entities", function(Entities, Music, Backbone, Marionette, $, _){
    Entities.Result = Backbone.Model.extend();

    Entities.ResultCollection = Backbone.Collection.extend({
        model: Entities.Result
    });

    var history;

    // TODO: fetch from server
    var initialiseHistory = function() {
        history = new Entities.ResultCollection([{
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
    };

    var API = {
        getHistoryEntities: function(){
            if(history === undefined){
                initialiseHistory();
            }
            return history;
        }
    };

    Music.reqres.setHandler("history:entities", function(){
        return API.getHistoryEntities();
    });
});
