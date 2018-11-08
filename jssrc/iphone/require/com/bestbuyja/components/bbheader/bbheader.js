define(function() {
    return function(controller) {
        var bbheader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "bbheader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0b3ab332aebd545",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        bbheader.setDefaultUnit(kony.flex.DP);
        var bbLogo = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70dp",
            "id": "bbLogo",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "bestbuy_logo.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSearch = new kony.ui.Button({
            "centerX": "90%",
            "centerY": "50%",
            "focusSkin": "CopydefBtnFocus0e71c9c11c7fc41",
            "height": "30dp",
            "id": "btnSearch",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefBtnNormal0f019707e11c641",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        var btnBack = new kony.ui.Button({
            "centerX": "7%",
            "centerY": "50%",
            "focusSkin": "CopydefBtnFocus0bff71aad942642",
            "height": "30dp",
            "id": "btnBack",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_btnBackOnClick_ic667bcc87a8409fb2c97833e1b04cff,
            "skin": "CopydefBtnNormal0f7cc9fbf8b234f",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        bbheader.add(bbLogo, btnSearch, btnBack);
        return bbheader;
    }
})