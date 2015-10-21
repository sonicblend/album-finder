Music.module("QueryApp.Show", function(Show, Music, Backbone, Marionette, $, _){
    Show.Query = Marionette.ItemView.extend({
        template: "#results-open"
    });
});
