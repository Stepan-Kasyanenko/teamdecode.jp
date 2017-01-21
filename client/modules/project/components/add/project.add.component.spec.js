/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.component("appProjectAdd",{
			templateUrl :'client/modules/project/views/project.add.html',
			controller  :"ProjectAddController",
			controllerAs:"vm",
		});

})(window,window.angular);
