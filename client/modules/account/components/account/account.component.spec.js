/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.account")
		.component("appAccount",{
			templateUrl :'client/modules/account/views/account.html',
			controller  :"AccountController",
			controllerAs:"vm",
		});

})(window,window.angular);
