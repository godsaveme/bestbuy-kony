//startup.js file
var appConfig = {
    appId: "BestBuyJA",
    appName: "BestBuyJA",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.17.12.64",
    serverPort: "80",
    secureServerPort: "443",
    isturlbase: "https://qualifacts-qa.konycloud.com/services",
    isMFApp: true,
    appKey: "16139fce534ed4ddaf7862a92e93d41c",
    appSecret: "43b19cc10920b15945e9a7ffaffb4273",
    serviceUrl: "https://100016535.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100016535.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "bestBuyServices": "https://qualifacts-qa.konycloud.com/services/bestBuyServices"
        },
        "service_doc_etag": "00000166EB1EE738",
        "appId": "a53869fc-282d-4899-ba34-15a6d3435df3",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "BestBuyJA",
        "reportingsvc": {
            "session": "https://qualifacts-qa.konycloud.com/services/IST",
            "custom": "https://qualifacts-qa.konycloud.com/services/CMS"
        },
        "baseId": "ba964f67-2ecb-47df-b994-47fb8babf58e",
        "app_default_version": "1.0",
        "services_meta": {
            "bestBuyServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://qualifacts-qa.konycloud.com/services/bestBuyServices"
            }
        },
        "Webapp": {
            "url": "https://qualifacts-qa.konycloud.com/BestBuyJA"
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://qualifacts-qa.konycloud.com/BestBuyJA/MWServlet",
    secureurl: "https://qualifacts-qa.konycloud.com/BestBuyJA/MWServlet",
    middlewareContext: "BestBuyJA"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        isMVC: true,
        retainSpaceOnHide: true,
        APILevel: 8100
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "spaiphone/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            showstartupform: function() {
                var startForm = new kony.mvc.Navigation("frmHome");
                startForm.navigate();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								