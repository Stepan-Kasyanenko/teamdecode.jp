/**
 * Created by avzal on 06.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.constant('TaskConstant',{
			page   :{
				page_size:20
			}
			,
			route  :{
				'tasks':'main.projects.selected.tasks',
				'edit' :'main.projects.selected.tasks.selected.edit',
				'new'  :'main.projects.selected.tasks.new',
				'view' :'main.projects.selected.tasks.selected.view'
			}
			,
			formats:{
				date:{
					task:"YYYY-MM-DD HH:mm:ss"
				}
			}
		})
		.factory("TaskApiConstant",TaskApiConstant);

	TaskApiConstant.$inject=["ApiConstant"];
	function TaskApiConstant(ApiConstant){
		return {
			ApiUrls:{
				task :ApiConstant.basePath+"/tasks/task/:action",
				tasks:ApiConstant.basePath+"/tasks"
			}
		};
	}
})
(window,window.angular);
