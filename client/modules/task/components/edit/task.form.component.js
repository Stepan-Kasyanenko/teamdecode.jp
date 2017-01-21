/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.controller("TaskFormController",TaskFormController);

	TaskFormController.$inject=["$mdSidenav","TaskRouteService","TaskService","ProjectConstant"];

	function TaskFormController($mdSidenav,TaskRouteService,TaskService,ProjectConstant){
		var vm=this;
		vm.toggle=toggle;
		vm.addTask=addTask;
		vm.$onInit=onInit;
		vm.$postLink=postLink;

		function onInit(){
			vm.isNew= !vm.task.Task.id;
			vm.task.Project={id:vm.projectID};
		}

		function postLink(){
			toggle(vm.isShow);
			onSidenavClose();
		}

		function onSidenavClose(){
			$mdSidenav('task-form')
				.onClose(function(){
					TaskRouteService.tasks();
				});
		}

		function toggle(isShow){
			if(isShow)
				$mdSidenav('task-form').open();
			else
				$mdSidenav('task-form').close();
		}

		function addTask(){
			//Fill by test data
			//for(var i=0; i<100; i++){
			//	TaskService.save({Project:{id:vm.projectID},Task:{title:"title "+i,description:"description "+i}});
			//}
			return TaskService.save(vm.task).then(function(){
				TaskRouteService.tasks({},{reload:ProjectConstant.route.selected});
			});
		}
	}
})(window,window.angular);