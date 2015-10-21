Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Result = Marionette.ItemView.extend({
        tagName: "li",
        template: "#results-closed",
    });

    List.Results = Marionette.CollectionView.extend({
        tagName: "ol",
        className: "list-unstyled",
        childView: List.Result,
    });
});
