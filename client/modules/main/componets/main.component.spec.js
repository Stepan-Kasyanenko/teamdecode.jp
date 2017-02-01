/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.main")
		.component("appMain",{
			templateUrl :'client/modules/main/views/index.html',
			controller  :"MainController",
			controllerAs:"vm",
			bindings    :{
				session:"<"
			}
		});
})(window,window.angular);
