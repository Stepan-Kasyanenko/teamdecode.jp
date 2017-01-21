/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.controller("TaskAddController",TaskAddController);

	TaskAddController.$inject=["TaskConstant"];

	function TaskAddController(TaskConstant){
		var vm=this;
		vm.hreafNew = TaskConstant.route.new;
	}
})(window,window.angular);