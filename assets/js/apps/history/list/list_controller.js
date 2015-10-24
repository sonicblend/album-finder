Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Controller = {
        listHistory: function() {
            var queryHistory = Music.request("history:entities");

            var historyView = new List.Results({
                collection: queryHistory,
            });

            historyView.on("childview:history:delete", function(childView, model){
                model.destroy();
            });

            historyView.on("childview:history:show", function(childView, model){
                // toggle open/close on model, and re-display
                model.attributes.closed = model.attributes.closed ? 0 : 1;
                childView.trigger('change:childModel', childView);
            });

            Music.regions.history.show(historyView);
        }
    };
});
