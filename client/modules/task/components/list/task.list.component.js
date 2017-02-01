/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("appProjectTaskController",appProjectTaskController);

	appProjectTaskController.$inject=["TaskRouteService","TaskService","TaskConstant","ProjectConstant","ToastService"];

	function appProjectTaskController(TaskRouteService,TaskService,TaskConstant,ProjectConstant,ToastService){
		var vm=this;
		vm.select=select;
		vm.completeTask=completeTask;
		vm.loadMoreByButton=loadMoreByButton;
		vm.$onInit=onInit;

		function select(task){
			return TaskRouteService.view({task_id:task.Task.id});
		}

		function completeTask(task){
			return TaskService.complete(task).then(function(){
				ToastService.info("Task completed");
				TaskRouteService.tasks({},{reload:ProjectConstant.route.selected});
			});
		}

		function onInit(){
			vm.noMoreData=vm.tasks.rows.length>=vm.tasks.total;
		}

		function loadMoreByButton(){
			return TaskService.list({
				project_id        :vm.projectID,
				paging_size       :TaskConstant.page.page_size,
				paging_offset     :vm.page.paging_size,
				condition_keywords:vm.search
			}).then(function(tasks){
				if(!vm.noMoreData)
					vm.page.paging_size=+vm.page.paging_size+TaskConstant.page.page_size;
				vm.tasks.rows=vm.tasks.rows.concat(tasks.rows);
				vm.noMoreData=vm.tasks.rows.length>=vm.tasks.total;
				TaskRouteService.tasks({paging_size:vm.page.paging_size},{reload:false});
			});
		}
	}
})(window,window.angular);