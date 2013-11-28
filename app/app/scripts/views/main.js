/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.MainView = Backbone.View.extend({

        template: JST['app/scripts/templates/main.ejs']

    });

})();
