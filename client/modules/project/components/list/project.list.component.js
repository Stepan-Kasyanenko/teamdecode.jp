/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("ProjectListController",ProjectListController);

	ProjectListController.$inject=["ProjectRouteService"];

	function ProjectListController(ProjectRouteService){
		var vm=this;
		vm.select=select;

		function select(project){
			ProjectRouteService.selected({id:project.id,paging_size:undefined})
				.then(function(){
					vm.selectedID=project.id;
				});
		}
	}
})(window,window.angular);