define(function() {
    let bestBuyApi_ = class bestBuyApi {
        constructor() {
            this.KNYMobileFabric = kony.sdk.getCurrentInstance();
            this.serviceName = "bestBuyServices";
            this.integrationObj = KNYMobileFabric.getIntegrationService(this.serviceName);
        }
        getCategories(operationSuccess, operationFailure, params) {
            let operationName = 'getCategories';
            kony.application.showLoadingScreen("skProgress", 'Loading categories', constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
            return this.integrationObj.invokeOperation(operationName, {}, params, operationSuccess.bind(this), operationFailure.bind(this));
        }
    };
    return {
        bestBuyApi: bestBuyApi_
    };
});