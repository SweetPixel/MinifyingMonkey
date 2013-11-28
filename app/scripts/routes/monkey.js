/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MonkeyRouter = Backbone.Router.extend({
        routes: {
        	"":"main"
        },
        main:function(){
        	require(["../views/css"], function)(CssView){
        		var mainView = new CssView();
        		mainView.render();
        	});
        	
        }

    });

    return MonkeyRouter;
});