/**
 * Created by avzal on 04.01.2017.
 */
(function(window, angular){
	"use strict";
	angular.module("use")
		.directive("useDividerV",useDividerV);

	function useDividerV(){
		return {
			restrict:"E",
			replace :true,
			template:'<span style="border-right:1px solid rgba(0,0,0,0.12);display:block;"></span>'
		};
	}
})(window, window.angular);