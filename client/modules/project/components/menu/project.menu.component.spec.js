/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.component("appProjectMenu",{
			templateUrl :'client/modules/project/views/project.menu.html',
			controller  :"ProjectMenuController",
			controllerAs:"vm",
			bindings    :{
			}
		});

})(window,window.angular);
