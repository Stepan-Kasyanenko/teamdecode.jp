/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("ProjectFormController",ProjectFormController);

	ProjectFormController.$inject=["$mdSidenav","ProjectRouteService","ProjectService","ProjectConstant","ToastService"];

	function ProjectFormController($mdSidenav,ProjectRouteService,ProjectService,ProjectConstant,ToastService){
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
			//for(var i=0; i<50; i++){
			//	ProjectService.save({Project:{title:"auto +i"}});
			//}
			return ProjectService.save(vm.project).then(function(res){
				ToastService.info("Project saved");
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
