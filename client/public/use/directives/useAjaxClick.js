/**
 * Created by avzal on 04.01.2017.
 */
(function(){
	"use strict";
	angular.module("use")
		.directive("useAjaxClick",useAjaxClick);

	useAjaxClick.$inject=["$parse"];

	function useAjaxClick($parse){
		return {
			restrict:"A",
			compile :function($element,attr){
				var fn=$parse(attr["useAjaxClick"],null,true);
				return function ngEventHandler(scope,element){
					element.on("click",function(event){
						var callback=function(){
							return fn(scope,{
								$event:event
							});
						};
						var promise=callback();
						if(promise && promise.finally){
							element.prop("disabled",true);
							promise.finally(function(){
								element.prop("disabled",false);
							});
						}
						scope.$apply();
					});
				};
			}
		};
	}
})();