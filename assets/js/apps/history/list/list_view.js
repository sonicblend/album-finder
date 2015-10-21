Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Result = Marionette.ItemView.extend({
        tagName: "li",
        template: "#results-closed",

        events: {
            "mouseenter": "toggleDelete",
            "mouseleave": "toggleDelete",
            "click button.js-delete": "deleteClicked",
        },

        // hide delete button unless hovering over
        toggleDelete: function(e){
            this.$el.find("button.js-delete").toggle();
        },

        // trigger controller to delete query
        deleteClicked: function(e){
            e.stopPropagation(); // really needed?
            this.trigger("history:delete", this.model);
        },

        // called by controller on removing a child
        remove: function(){
            var self = this;
            this.$el.fadeOut(function(){
                // call original remove implementation to garbage-collect,
                // stop listening to events etc.
                Marionette.ItemView.prototype.remove.call(self);
            });
        },
    });

    // use CompositeView rather than CollectionView, to additionally display
    // the #history-header template
    List.Results = Marionette.CompositeView.extend({
        tagName: "ol",
        className: "list-unstyled",
        template: "#history-header",
        childView: List.Result,
        childViewContainer: "#history",
    });
});
