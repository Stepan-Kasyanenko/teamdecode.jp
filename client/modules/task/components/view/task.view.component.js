/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.controller("TaskViewController",TaskViewController);

	TaskViewController.$inject=["$mdSidenav","$mdDialog","TaskRouteService","TaskService","TaskConstant"];

	function TaskViewController($mdSidenav,$mdDialog,TaskRouteService,TaskService,TaskConstant){
		var vm=this;

		vm.$onInit=onInit;
		vm.$postLink=postLink;

		vm.toggle=toggle;
		vm.editTask=editTask;
		vm.deleteTask=deleteTask;

		function onInit(){
			vm.task.Project={id:vm.projectID};
		}

		function postLink(){
			toggle(vm.isShow);
			onSidenavClose();
		}

		function onSidenavClose(){
			$mdSidenav('task-view')
				.onClose(function(){
					TaskRouteService.tasks();
				});
		}

		function toggle(isShow){
			if(isShow)
				$mdSidenav('task-view').open();
			else
				$mdSidenav('task-view').close();
		}

		function editTask(){
			TaskRouteService.edit();
		}

		function deleteTask(){
			var conf=$mdDialog.confirm()
				.title('Attention')
				.textContent('Delete the task?')
				.ok("Delete")
				.cancel("Cancel");
			$mdDialog.show(conf)
				.then(function(){
					TaskService.delete({task_id:vm.task.Task.id}).then(function(){
						TaskRouteService.tasks({},{reload:TaskConstant.route.tasks});
					});
				})
				.catch(angular.noop);
		}
	}
})(window,window.angular);