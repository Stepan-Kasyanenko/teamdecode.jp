/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("ProjectAddController",ProjectAddController);

	ProjectAddController.$inject=["ProjectRouteService"];

	function ProjectAddController(ProjectRouteService){
		var vm=this;
		vm.onAdd=add;

		function add(){
			ProjectRouteService.new();
		};
	}
})(window,window.angular);