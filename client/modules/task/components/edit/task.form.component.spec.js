/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.component("appProjectTaskForm",{
			templateUrl :'client/modules/task/views/task.form.html',
			controller  :"TaskFormController",
			controllerAs:"vm",
			bindings    :{
				projectID:"<",
				task     :"<",
				isShow   :"<"
			}
		});

})(window,window.angular);
