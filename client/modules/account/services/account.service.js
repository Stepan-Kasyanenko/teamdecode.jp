(function(window,angular){
	"use strict";
	angular.module("app.account")
		.service("AccountService",AccountService)

	AccountService.$inject=["$resource","AccountConstant"];
	function AccountService($resource,AccountConstant){
		return $resource(AccountConstant.ApiUrls.account);
	}
})(window,window.angular);
