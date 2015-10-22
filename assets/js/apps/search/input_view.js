Music.module("SearchApp", function(Search, Music, Backbone, Marionette, $, _){

    function search(e, query) {
        var history = Music.request("history:entities");
        var newQuery = new Music.Entities.Result({
            model: history,
        });
        // TODO: Query REST interface, rather than make them up
        var data = {
            closed: 1,
            query: query,
            deezer: {
                not_found: 1,
            },
            bandcamp: {
                not_found: 1,
            },
        };
        // calculate new id - server would normally generate this
        if (history.length > 0) {
            var highestId = history.max(function(h){ return h.id; }).get("id");
            data.id = highestId + 1;
        }
        else {
            data.id = 1;
        }
        if (newQuery.save(data)) {
            // refresh history viewl - erm, seems to work
            Music.HistoryApp.List.Controller.listHistory();
        }
    }

    Search.Input = Marionette.ItemView.extend({
        el: "#search-region",
        template: "#search",

        // UI bindings create cached attributes that
        // point to jQuery selected objects
        ui: {
            input: '#js-search-text'
        },

        events: {
            "click button#js-search": "onClick",
            "keypress input#js-search-text": "onKeyPress",
        },

        onClick: function (e){
            var query = this.ui.input.val().trim();
            this.ui.input.val('');
            if (query) {
                search(e, query);
            }
        },
        onKeyPress: function(e){
            var query = this.ui.input.val().trim();
            var ENTER_KEY = 13;
            if (e.which === ENTER_KEY && query) {
                this.ui.input.val('');
                search(e, query);
            }
        },
    });

    var staticView = new Search.Input();
    staticView.render();
});
