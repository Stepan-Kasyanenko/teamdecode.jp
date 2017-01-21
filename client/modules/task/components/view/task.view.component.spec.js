/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.component("appProjectTaskView",{
			templateUrl :'client/modules/task/views/task.view.html',
			controller  :"TaskViewController",
			controllerAs:"vm",
			bindings    :{
				projectID:"<",
				task     :"<",
				isShow   :"<"
			}
		});

})(window,window.angular);
