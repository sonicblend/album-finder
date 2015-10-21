Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Controller = {
        listHistory: function() {
            var queryHistory = Music.request("history:entities");

            var historyView = new List.Results({
                collection: queryHistory,
            });

            historyView.on("childview:history:delete", function(childView, model){
                queryHistory.remove(model);
            });

            historyView.on("childview:history:show", function(childView, model){
                // toggle open/close on model, and re-display
                model.attributes.closed = model.attributes.closed ? 0 : 1;

                // hmm, should the view detect the change and refresh?
                Music.regions.main.show(historyView, {forceShow: true});
            });

            Music.regions.main.show(historyView);
        }
    };
});
