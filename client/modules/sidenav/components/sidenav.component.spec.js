/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.sidenav")
		.component("appSidenav",{
			templateUrl :'client/modules/sidenav/views/sidenav.html',
			controller  :"SidenavController",
			controllerAs:"vm",
			bindings    :{
			}
		});

})(window,window.angular);
