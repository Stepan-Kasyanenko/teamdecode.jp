/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.component("appProjectTaskList",{
			templateUrl :'client/modules/task/views/task.list.html',
			controller  :"appProjectTaskController",
			controllerAs:"vm",
			bindings    :{
				tasks    :"<",
				page     :"<",
				projectID:"<",
				search   :"<"
			}
		});

})(window,window.angular);
