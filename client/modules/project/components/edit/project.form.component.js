/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("ProjectFormController",ProjectFormController);

	ProjectFormController.$inject=["$mdSidenav","ProjectRouteService","ProjectService","ProjectConstant"];

	function ProjectFormController($mdSidenav,ProjectRouteService,ProjectService,ProjectConstant){
		var vm=this;
		vm.toggle=toggle;
		vm.addProject=addProject;
		vm.$onInit=init;
		vm.$postLink=postLink;

		function init(){
			vm.isNew= !vm.project.Project.id;
		}

		function postLink(){
			toggle(vm.isShow);
			onSidenavClose();
		}

		function onSidenavClose(){
			$mdSidenav('project')
				.onClose(function(){
					if(vm.isNew)
						ProjectRouteService.blank();
					else
						ProjectRouteService.selected({},{reload:false});
				});
		}

		function addProject(){
			for(var i=0; i<40; i++){
				ProjectService.save({Project:{title:" auto project "+i}});
			}
			return ProjectService.save(vm.project).then(function(res){
				//we need force reload
				ProjectRouteService.selected({id:res.Project.id},{reload:ProjectConstant.route.selected});
			});
		}

		function toggle(isShow){
			if(isShow)
				$mdSidenav('project').open();
			else
				$mdSidenav('project').close();
		}
	}
})(window,window.angular);