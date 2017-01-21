/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.component("appProjectList",{
			templateUrl :'client/modules/project/views/project.list.html',
			controller  :"ProjectListController",
			controllerAs:"vm",
			bindings    :{
				projects    :"<",
				selectedID	:"<",
			}
		});

})(window,window.angular);
