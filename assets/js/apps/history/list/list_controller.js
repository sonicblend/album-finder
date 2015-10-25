Music.module("HistoryApp.List", function(List, Music, Backbone, Marionette, $, _){
    List.Controller = {
        listHistory: function() {
            // Model
            var queryHistory = Music.request("history:entities");

            function showHistory() {
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
            queryHistory.on("add", function() {
                // Display the history if it's not already showing
                if (Music.regions.history.currentView.el.id == 'welcome') {
                    console.log("display history");
                    showHistory();
                }
            });

            function showWelcome() {
                // Static view (empty history / welcome view)
                var staticView = new List.StaticView();
                Music.regions.history.show(staticView);
            }
            queryHistory.on("remove", function() {
                if (queryHistory.length == 0) {
                    showWelcome();
                }
            });

            // Run once
            if (queryHistory.length) {
                showHistory();
            }
            else {
                showWelcome();
            }
        }
    };
});
