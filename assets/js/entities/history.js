Music.module("Entities", function(Entities, Music, Backbone, Marionette, $, _){
    Entities.Result = Backbone.Model.extend({
        // would be nice to not hardcode this...
        urlRoot: "http://127.0.0.1:3000/search",

        defaults: {
            closed: 1,
        },

        fetch: function (query, options) {
            options = options || {};
            if (options.url === undefined) {
                options.url = this.urlRoot + "/" + query;
            }

            return Backbone.Model.prototype.fetch.call(this, options);
        },
    });

    Entities.ResultCollection = Backbone.Collection.extend({
        url: "history",
        model: Entities.Result
    });

    Entities.configureStorage("Music.Entities.ResultCollection");

    var history = new Entities.ResultCollection();

    var API = {
        getHistoryEntities: function(){
            history.fetch();
            return history;
        },
    };

    Music.reqres.setHandler("history:entities", function(){
        return API.getHistoryEntities();
    });
});
