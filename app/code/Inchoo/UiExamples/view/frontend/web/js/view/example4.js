
define([
    'ko',
    'uiComponent'
], function (ko, Component) {
    'use strict';

    return Component.extend({

        initialize: function(data) {

            console.log("example4 component initialize");
            console.log(data);

            this._super();

            //this.helloMessage = "Hello world !";
            //this.helloArray = ["Hello", "world", "!"];

            this.helloMessage = ko.observable("Hello world !");
            this.helloArray = ko.observableArray(["Hello", "world", "!"]);
        },

        addToArray: function() {

            this.helloArray.push("Push");
            console.log(this.helloArray());

            //this.helloMessage("Hello new world !");
        }

    });
});