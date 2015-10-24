Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Result = Marionette.ItemView.extend({
        tagName: "li",
        getTemplate: function(){
            if (this.model.attributes.closed){
                return "#results-closed";
            } else {
                return "#results-open";
            }
        },

        events: {
            "mouseenter": "toggleDelete",
            "mouseleave": "toggleDelete",
            "click button.js-delete": "deleteClicked",
            "click button.js-show": "showClicked",
        },

        // hide delete button unless hovering over
        toggleDelete: function(e){
            this.$el.find("button.js-delete").toggle();
        },

        showClicked: function(e){
            this.trigger("history:show", this.model);
        },

        // trigger controller to delete query
        deleteClicked: function(e){
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

        childEvents: {
            "change:childModel": "childModelChanged",
        },
        childModelChanged: function(e, childView){
            childView.render();
        },
    });
});
