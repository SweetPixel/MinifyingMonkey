/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var JsModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return JsModel;
});