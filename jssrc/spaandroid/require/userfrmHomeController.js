define({
    getCategories: function(params) {
        let bestBuyApi = require('bestBuyApi');
        let bestBuyApiClass = new bestBuyApi.bestBuyApi();
        try {
            bestBuyApiClass.getCategories(this.getCategoriesSuccess, this.getCategoriesFailure, params);
        } catch (err) {
            alert('There was an error processing your request');
        }
        //this.view.segCategories.onRowClick = this.abc;
    },
    onRowClickSegCategories: function(e) {
        let segCategoriesItem = this.view.segCategories.selectedRowItems;
        let categId = {
            "idCategory": segCategoriesItem[0].id
        };
        kony.print('87654321' + JSON.stringify(segCategoriesItem[0]));
        this.getCategories(categId);
    },
    getCategoriesSuccess: function(res) {
        kony.application.dismissLoadingScreen();
        this.view.segCategories.removeAll();
        kony.print('87654321' + JSON.stringify(res));
        this.view.segCategories.setData(res.categories[0].subCategories);
        this.view.segCategories.widgetDataMap = {
            lblDescription: 'name'
        };
    },
    getCategoriesFailure: function(res) {
        kony.print('12345678' + JSON.stringify(res))
        kony.application.dismissLoadingScreen();
    }
});