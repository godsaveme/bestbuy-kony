define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** btnBackOnClick defined for bbheader **/
    AS_UWI_i557c0c2ee3f4ad38ec41225c372a8f2: function AS_UWI_i557c0c2ee3f4ad38ec41225c372a8f2(eventobject) {
        var self = this;
        return self.onBackButton.call(this);
    },
    /** onRowClick defined for segCategories **/
    AS_Segment_hd781ab5bde84aabbedcacb586a0280a: function AS_Segment_hd781ab5bde84aabbedcacb586a0280a(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onRowClickSegCategories.call(this);
    },
    /** init defined for frmHome **/
    AS_Form_c25b9f009b4a477d93508b7ce3d64a8a: function AS_Form_c25b9f009b4a477d93508b7ce3d64a8a(eventobject) {
        var self = this;
        return self.onInit.call(this);
    },
    /** postShow defined for frmHome **/
    AS_Form_af45146f23074258895a6726729942b9: function AS_Form_af45146f23074258895a6726729942b9(eventobject) {
        var self = this;
        return self.getCategories.call(this, {
            "idCategory": "cat00000"
        });
    }
});