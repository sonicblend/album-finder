Music.module("Entities", function(Entities, Music, Backbone, Marionette, $, _){
    Entities.Result = Backbone.Model.extend();

    Entities.ResultCollection = Backbone.Collection.extend({
        model: Entities.Result
    });
});
