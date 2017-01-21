/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.session")
		.controller("LogoutController",LogoutController);

	LogoutController.$inject=["$mdDialog","SessionService","ProjectRouteService"];

	function LogoutController($mdDialog,SessionService,ProjectRouteService){
		var vm=this;
		vm.logout=logout;

		function logout(){
			var conf=$mdDialog.confirm()
				.title('Attention')
				.textContent('Logout?')
				.ok("Logout")
				.cancel("Cancel");
			return $mdDialog.show(conf)
				.then(function(){
					return SessionService.signout()
						.then(function(){
							ProjectRouteService.blank({},{reload:true});
						});
				})
				.catch(angular.noop);

		}

	}
})(window,window.angular);