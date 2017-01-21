/**
 * Created by avzal on 09.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("app.account")
		.controller("AccountController",AccountController);

	AccountController.$inject=["AccountService"];

	function AccountController(AccountService){
		var vm = this;
		getAccount();

		function getAccount(){
			return AccountService.get(function(resp){ vm.account= resp.Account;})
		}

	}
})(window,window.angular);