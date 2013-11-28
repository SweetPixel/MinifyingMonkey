/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var HtmlModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return HtmlModel;
});