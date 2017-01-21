/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.sidenav")
		.controller("SidenavController",SidenavController);

	SidenavController.$inject=["$mdSidenav"];

	function SidenavController($mdSidenav){
		var vm = this;
		vm.openMenu = openMenu;

		function openMenu(){
			$mdSidenav("left-menu").open();
		}
	}
})(window,window.angular);