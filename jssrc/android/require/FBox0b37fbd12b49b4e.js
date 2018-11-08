define("FBox0b37fbd12b49b4e", function() {
    return function(controller) {
        FBox0b37fbd12b49b4e = new kony.ui.FlexContainer({
            "clipBounds": false,
            "height": "40dp",
            "id": "FBox0b37fbd12b49b4e",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        FBox0b37fbd12b49b4e.setDefaultUnit(kony.flex.DP);
        var lblDescription = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0a20231e12af540x",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "textCopyable": false
        });
        FBox0b37fbd12b49b4e.add(lblDescription);
        return FBox0b37fbd12b49b4e;
    }
})