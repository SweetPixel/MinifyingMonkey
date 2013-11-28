/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var CssView = Backbone.View.extend({
        el :'#content',
        template: JST['app/scripts/templates/css.ejs'],
        initialize:function(){
        	this.render();
        },
        
        render: function(){
        	this.$el.html(this.template());
        }
    });

    return CssView;
});