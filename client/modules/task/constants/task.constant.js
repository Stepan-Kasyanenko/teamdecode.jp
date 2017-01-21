/**
 * Created by avzal on 06.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.constant('TaskConstant',{
			ApiUrls:{
				task :"https://api-test-task.decodeapps.io/tasks/task/:action",
				tasks:"https://api-test-task.decodeapps.io/tasks",
			},
			page   :{
				page_size:20
			},
			route  :{
				'tasks':'main.projects.selected.tasks',
				'edit' :'main.projects.selected.tasks.selected.edit',
				'new'  :'main.projects.selected.tasks.new',
				'view' :'main.projects.selected.tasks.selected.view'
			},
			formats:{
				date:{
					task:"YYYY-MM-DD HH:mm:ss"
				}
			}
		});
})(window,window.angular);
