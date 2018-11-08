/* jshint esnext: true */
define(() => {

    let bestBuyApi_ = class bestBuyApi {
        constructor() {
            this.KNYMobileFabric = kony.sdk.getCurrentInstance();
            this.serviceName = "bestBuyServices";
            this.integrationObj = KNYMobileFabric.getIntegrationService(this.serviceName);
        }
        getCategories(operationSuccess, operationFailure, params) {
            let operationName = 'getCategories';
            this.showLoadingScreen('Loading categories');
            return this.integrationObj.invokeOperation(operationName, {}, params, operationSuccess.bind(this), operationFailure.bind(this));
        }
      	getProductsByCategory(operationSuccess, operationFailure, params) {
          	let operationName = 'getProductsByCategory';
          	this.showLoadingScreen('Loading products');
            return this.integrationObj.invokeOperation(operationName, {}, params, operationSuccess.bind(this), operationFailure.bind(this));
        
        }
      	showLoadingScreen(description){
      		kony.application.showLoadingScreen("skProgress", description, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        }
    };

    return {
        bestBuyApi: bestBuyApi_
    };
}
);