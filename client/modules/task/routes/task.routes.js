/**
 * Created by avzal on 06.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.config(RouteConfig);

	RouteConfig.$inject=["$stateProvider","TaskConstant"];

	function RouteConfig($stateProvider,TaskConstant){
		$stateProvider
			.state(TaskConstant.route.tasks,{
				url           :'/tasks?{search:.*}&{paging_size:[0-9]*}',
				views         :{
					'project-tasks@main'   :{
						component:'appProjectTaskList'
					},
					'project-task-add@main':{
						component:'appTaskAdd'
					},
					'project-menu@main'    :{
						component:'appProjectMenu',
					}
				},
				resolve       :{
					tasks    :["TaskService","$stateParams","TaskConstant",function(TaskService,$stateParams,TaskConstant){
						return TaskService.list({
							project_id        :$stateParams.id,
							paging_size       :$stateParams.paging_size || TaskConstant.page.page_size,
							paging_offset     :"0",
							condition_keywords:$stateParams.search
						});
					}],
					projectID:["$stateParams",function($stateParams){
						return $stateParams.id;
					}],
					page     :["$stateParams","TaskConstant",function($stateParams,TaskConstant){
						return {paging_size:$stateParams.paging_size || TaskConstant.page.page_size};
					}],
					search   :["$stateParams",function($stateParams){
						return $stateParams.search;
					}]
				},
				reloadOnSearch:false
			})
			.state('main.projects.selected.tasks.selected',{
				url     :'/{task_id:[0-9]{1,}}',
				abstract:true
			})
			.state(TaskConstant.route.edit,{
				url    :'/edit',
				views  :{
					'project-task-form@main':{
						component:'appProjectTaskForm'
					}
				},
				resolve:{
					isShow   :[function(){
						return true;
					}],
					projectID:["$stateParams",function($stateParams){
						return $stateParams.id;
					}],
					task     :["TaskService","$stateParams",function(TaskService,$stateParams){
						return TaskService.get({task_id:$stateParams.task_id,project_id:$stateParams.id}).then(function(res){return res;}).catch(angular.noop);
					}]
				}
			})
			.state(TaskConstant.route.view,{
				url    :'/view',
				views  :{
					'project-task-view@main':{
						component:'appProjectTaskView'
					}
				},
				resolve:{
					isShow   :function(){
						return true;
					},
					projectID:["$stateParams",function($stateParams){
						return $stateParams.id;
					}],
					task     :["TaskService","$stateParams",function(TaskService,$stateParams){
						return TaskService.get({task_id:$stateParams.task_id,project_id:$stateParams.id}).then(function(res){return res;}).catch(angular.noop);
					}]
				}
			})
			.state(TaskConstant.route.new,{
				url    :'/new',
				views  :{
					'project-task-form@main':{
						component:'appProjectTaskForm'
					}
				},
				resolve:{
					isShow   :function(){
						return true;
					},
					projectID:["$stateParams",function($stateParams){
						return $stateParams.id;
					}],
					task     :["TaskResource",function(TaskResource){
						var newTask=new TaskResource();
						newTask.Task={};
						return newTask;
					}]
				}
			});
	}
})(window,window.angular);

