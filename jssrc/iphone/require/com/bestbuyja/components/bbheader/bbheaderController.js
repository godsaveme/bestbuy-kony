define(function() {
    var controller = require("com/bestbuyja/components/bbheader/userbbheaderController");
    var actions = require("com/bestbuyja/components/bbheader/bbheaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});