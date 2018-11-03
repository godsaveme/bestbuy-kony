define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.bestbuyja.components.bbheader", "bbheader", "bbheaderController");
        kony.application.registerMaster({
            "namespace": "com.bestbuyja.components",
            "classname": "bbheader",
            "name": "com.bestbuyja.components.bbheader"
        });
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});