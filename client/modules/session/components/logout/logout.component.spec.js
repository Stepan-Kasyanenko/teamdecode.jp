/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.session")
		.component("appSessionLogout",{
			templateUrl :'client/modules/session/views/logout.html',
			controller  :"LogoutController",
			controllerAs:"vm",
		});

})(window,window.angular);
