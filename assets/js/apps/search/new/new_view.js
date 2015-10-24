Music.module("SearchApp.New", function(New, Music, Backbone, Marionette, $, _){
    New.Search = Marionette.ItemView.extend({
        el: "#search-region",
        // Template-less ItemView
        template: false,

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
            if (query) {
                this.ui.input.val('');
                New.Controller.fetch(query);
            }
        },
        onKeyPress: function(e){
            var query = this.ui.input.val().trim();
            var ENTER_KEY = 13;
            if (e.which === ENTER_KEY && query) {
                this.ui.input.val('');
                New.Controller.fetch(query);
            }
        },
    });
});
