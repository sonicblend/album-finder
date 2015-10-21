Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Result = Marionette.ItemView.extend({
        tagName: "li",
        template: "#results-closed",
    });

    // use CompositeView rather than CollectionView, to additionally display
    // the #results-header template
    List.Results = Marionette.CompositeView.extend({
        tagName: "ol",
        className: "list-unstyled",
        template: "#results-header",
        childView: List.Result,
        childViewContainer: "#history",
    });
});
