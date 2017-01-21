/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.controller("appProjectTaskController",appProjectTaskController);

	appProjectTaskController.$inject=["TaskRouteService","TaskService","TaskConstant"];

	function appProjectTaskController(TaskRouteService,TaskService,TaskConstant){
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
				TaskRouteService.tasks({},{reload:TaskConstant.route.tasks});
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

		//#region Try virtual repeat
		//
		//vm.isAnotherDate=function(index){
		//	var current=vm.tasks.rows[index];
		//	if(!current)
		//		return false;
		//	var prev=vm.tasks.rows[index-1];
		//	if(!prev){
		//		return true;
		//	}
		//	return current.Task.created_at_day!==prev.Task.created_at_day;
		//}
		//
		//vm.dynamicTasks={
		//	getItemAtIndex:function(index){
		//		var item=vm.tasks.rows[index];
		//		if(vm.tasks.rows.length-index>40)
		//			vm.noMoreData=false;
		//		if(item)
		//			return item;
		//		loadMore();
		//		return null;
		//	},getLength   :function(){
		//		return vm.tasks.total;
		//	}
		//};
		//
		//vm.loading=false;
		//vm.noMoreData=false;
		//function loadMore(){
		//	//console.log("loadMore");
		//	if(vm.loading || vm.noMoreData)
		//		return;
		//	vm.loading=true;
		//	TasksService.query({
		//		project_id        :vm.projectID,
		//		paging_size       :20,
		//		paging_offset     :vm.page.paging_size,
		//		condition_keywords:vm.search
		//	})
		//		.$promise
		//		.then(function(res){
		//			res.tasks.total=res.total_count;
		//			return {
		//				total:res.total_count,
		//				rows:res.tasks.map(function(m){
		//					//We need format, because  moment in filter throw warning
		//					m.Task.created_at_day=moment(m.Task.created_at,TaskConstant.formats.date.task).startOf("day").format("YYYY-MM-DD");
		//					return m;
		//				})
		//			};
		//		})
		//		.then(function(tasks){
		//			vm.loading=false;
		//			vm.noMoreData=tasks.rows.length===0;
		//			vm.page.paging_size=+vm.page.paging_size+20;
		//			//TaskRouteService.tasks({paging_size:vm.page.paging_size},{reload:false});
		//			vm.tasks.rows=vm.tasks.rows.concat(tasks.rows);
		//		});
		//}
		//#endregion
	}
})(window,window.angular);