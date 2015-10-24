Music.module("SearchApp", function(Search, Music, Backbone, Marionette, $, _){

    function search(e, query) {
        var newQuery = new Music.Entities.Result({});

        newQuery.fetch(query, { success: function() {
            console.log("result: ", newQuery.toJSON());

            var history = Music.request("history:entities");
            history.create(newQuery);
        }});
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
