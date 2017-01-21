/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.controller("TaskAddController",TaskAddController);

	TaskAddController.$inject=["TaskRouteService"];

	function TaskAddController(TaskRouteService){
		var vm=this;
		vm.onAdd=onAdd;

		function onAdd(){
			TaskRouteService.new();
		};
	}
})(window,window.angular);