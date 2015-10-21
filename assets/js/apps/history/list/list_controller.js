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

            Music.regions.main.show(historyView);
        }
    };
});
