/**
 * Created by avzal on 17.01.2017.
 */
/**
 * Created by avzal on 27.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("app.main")
		.service("MainRouteService",MainRouteService)

	MainRouteService.$inject=["$state","MainConstant"];
	function MainRouteService($state,MainConstant){
		return {
			'root':function(){
				return go(MainConstant.route.root,arguments);
			}
		}

		function go(stateName,args){
			var arr=[stateName].concat([].slice.call(args));
			return $state.go.apply($state,arr);
		}
	}
})(window,window.angular);
