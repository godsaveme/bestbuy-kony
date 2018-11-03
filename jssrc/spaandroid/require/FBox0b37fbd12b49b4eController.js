define(function(){
	var controller = require("userFBox0b37fbd12b49b4eController");
	var controllerActions = ["FBox0b37fbd12b49b4eControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})