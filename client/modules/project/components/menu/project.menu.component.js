/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("ProjectMenuController",ProjectMenuController);

	ProjectMenuController.$inject=["$stateParams","ProjectService","ProjectRouteService","$mdDialog","TaskConstant","ToastService"];

	function ProjectMenuController($stateParams,ProjectService,ProjectRouteService,$mdDialog,TaskConstant,ToastService){
		var vm=this;
		vm.$onInit=onInit;
		vm.isShowSearch=false;
		vm.searchText=$stateParams.search;
		vm.editProject=editProject;
		vm.deleteProject=deleteProject;
		vm.searchTasks=searchTasks;
		vm.toogleSearch=toogleSearch;

		function onInit(){
			vm.isShowSearch= !!vm.searchText;
		}

		function toogleSearch(){
			vm.isShowSearch= !vm.isShowSearch;
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
						ToastService.info("Project deleted");
						ProjectRouteService.blank();
					});
				})
				.catch(angular.noop);

		}

		function searchTasks(){
			if(vm.searchText===undefined)
				ProjectRouteService.selected({search:vm.searchText},{reload:false});
			else
				ProjectRouteService.selected({search:vm.searchText},{reload:TaskConstant.route.tasks});
		}

	}
})(window,window.angular);