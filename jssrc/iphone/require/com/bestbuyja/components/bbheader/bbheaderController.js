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
    controller.AS_btnBackOnClick_ic667bcc87a8409fb2c97833e1b04cff = function() {
        if (this.btnBackOnClick) {
            this.btnBackOnClick.apply(this, arguments);
        }
    }
    return controller;
});