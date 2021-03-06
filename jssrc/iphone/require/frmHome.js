define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var bbheader = new com.bestbuyja.components.bbheader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "bbheader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0b3ab332aebd545",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            bbheader.btnBackOnClick = controller.AS_UWI_i557c0c2ee3f4ad38ec41225c372a8f2;
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0a8343e77d73a44",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxCategories = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxCategories",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "10%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategories.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('FBox0b37fbd12b49b4e', 'FBox0b37fbd12b49b4e', 'FBox0b37fbd12b49b4eController');
            var segCategories = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblDescription": ""
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segCategories",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_hd781ab5bde84aabbedcacb586a0280a,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "segProdOnSale",
                "rowTemplate": "FBox0b37fbd12b49b4e",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "0000005f",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblDescription": "lblDescription"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxCategories.add(segCategories);
            var flxBreadcrumb = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxBreadcrumb",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBreadcrumb.setDefaultUnit(kony.flex.DP);
            var lblBreadcrumb = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBreadcrumb",
                "isVisible": true,
                "left": "5%",
                "skin": "CopydefLabel0a9e5f2e11b7348",
                "textStyle": {
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxBreadcrumb.add(lblBreadcrumb);
            var flxProducts = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxProducts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0f71899ecf15948",
                "top": "10%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProducts.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('CopyFBox0b71084915b6443', 'CopyFBox0b71084915b6443', 'CopyFBox0b71084915b6443Controller');
            var segProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgProduct": "imagedrag.png",
                    "lblAvgUserRating": "Label",
                    "lblName": "Label",
                    "lblPrice": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "segProdRegular",
                "rowTemplate": "CopyFBox0b71084915b6443",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "0000005f",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "imgProduct": "imgProduct",
                    "lblAvgUserRating": "lblAvgUserRating",
                    "lblName": "lblName",
                    "lblPrice": "lblPrice"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxProducts.add(segProducts);
            flxBody.add(flxCategories, flxBreadcrumb, flxProducts);
            flxContainer.add(bbheader, flxBody);
            this.add(flxContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "init": controller.AS_Form_c25b9f009b4a477d93508b7ce3d64a8a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_af45146f23074258895a6726729942b9,
            "skin": "blankFrmHome"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});