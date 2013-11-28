/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CssModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return CssModel;
});