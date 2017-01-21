/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.task")
		.component("appTaskAdd",{
			templateUrl :'client/modules/task/views/task.add.html',
			controller  :"TaskAddController",
			controllerAs:"vm",
			bindings    :{
				projectID:"<"
			}
		});

})(window,window.angular);
