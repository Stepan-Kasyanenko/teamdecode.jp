/**
 * Created by avzal on 16.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("use")
		.service("ToastService",ToastService);

	ToastService.$inject=["$mdToast"];

	function ToastService($mdToast){
		this.info=show('md-toast-info');
		this.error=show('md-toast-error');
		this.warning=show('md-toast-warning');

		function show(type){
			return function(text){
				$mdToast.show(
					$mdToast.simple()
						.textContent(text)
						.position("top right")
						.hideDelay(10000)
						.toastClass(type)
				);
			}
		}
	}
})(window,window.angular);