define("flxRowTemplate", function() {
    return function(controller) {
        var flxRowTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxRowTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0d13d9cc2cac74b",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRowTemplate.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "40%",
            "skin": "CopydefLabel0d2de8fdc36474f",
            "text": "Title",
            "textStyle": {},
            "top": "5%",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "left": "40.00%",
            "skin": "CopydefLabel0a5ced5533d124e",
            "text": "Price",
            "textStyle": {},
            "top": "60%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgProduct = new kony.ui.Image2({
            "height": "120dp",
            "id": "imgProduct",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "3%",
            "width": "120dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAvgUserRating = new kony.ui.Label({
            "id": "lblAvgUserRating",
            "isVisible": true,
            "left": "40.03%",
            "skin": "CopydefLabel0dfc009557c3a4f",
            "textStyle": {},
            "top": "80%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblOnSale = new kony.ui.Label({
            "id": "lblOnSale",
            "isVisible": true,
            "right": "8%",
            "skin": "skOnSale",
            "text": "ON SALE!!",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRowTemplate.add(lblName, lblPrice, imgProduct, lblAvgUserRating, lblOnSale);
        return flxRowTemplate;
    }
})