define(function(){
	var controller = require("userCopyFBox0b71084915b6443Controller");
	var controllerActions = ["CopyFBox0b71084915b6443ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})