Music.module("SearchApp", function(Search, Music, Backbone, Marionette, $, _){

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
            console.log('search button: ', query);
            this.ui.input.val('');
        },
        onKeyPress: function(e){
            var ENTER_KEY = 13;
            var query = this.ui.input.val().trim();

            if (e.which === ENTER_KEY && query) {
                console.log('search enter: ', query);
                this.ui.input.val('');
            }
        },
    });

    var staticView = new Search.Input();
    staticView.render();
});
