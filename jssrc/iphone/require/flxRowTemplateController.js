define(function(){
	var controller = require("userflxRowTemplateController");
	var controllerActions = ["flxRowTemplateControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})