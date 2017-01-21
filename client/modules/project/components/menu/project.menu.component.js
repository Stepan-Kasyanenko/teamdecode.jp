/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("ProjectMenuController",ProjectMenuController);

	ProjectMenuController.$inject=["$stateParams","ProjectService","ProjectRouteService","$mdDialog","TaskConstant"];

	function ProjectMenuController($stateParams,ProjectService,ProjectRouteService,$mdDialog,TaskConstant){
		var vm=this;
		vm.searchText=$stateParams.search;
		vm.hasProject=hasProject;
		vm.editProject=editProject;
		vm.deleteProject=deleteProject;
		vm.searchTasks=searchTasks;

		function hasProject(){
			return !!$stateParams.id;
		}

		function editProject(){
			ProjectRouteService.edit();
		};
		function deleteProject(){
			var conf=$mdDialog.confirm()
				.title('Attention')
				.textContent('Delete the project?')
				.ok("Delete")
				.cancel("Cancel");
			$mdDialog.show(conf)
				.then(function(){
					ProjectService.delete({project_id:$stateParams.id}).then(function(){
						ProjectRouteService.blank();
					});
				})
				.catch(angular.noop);

		}

		function searchTasks(){
			ProjectRouteService.selected({search:vm.searchText},{reload:TaskConstant.route.tasks});
		}
	}
})(window,window.angular);