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
            query: "Liquid Stranger - The Intergalactic Slapstick",
            deezer: {
                link: "https://www.deezer.com/album/1017537",
                id: "1017537",
            },
            bandcamp: {
                link: "https://liquidstranger.bandcamp.com/album/the-intergalactic-slapstick",
                id: "4283774662",
            },
        },{
            id: 2,
            query: "C Duncan – Architect",
            deezer: {
                link: "https://www.deezer.com/album/10787960",
                id: "10787960",
            },
            bandcamp: {
                link: "not_really", // fake
                id: "1", // fake
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