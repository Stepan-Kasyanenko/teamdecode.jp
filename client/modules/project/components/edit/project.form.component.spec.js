/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.component("appProjectForm",{
			templateUrl :'client/modules/project/views/project.form.html',
			controller  :"ProjectFormController",
			controllerAs:"vm",
			bindings    :{
				project:"<",
				isShow   :"<"
			}
		});

})(window,window.angular);
