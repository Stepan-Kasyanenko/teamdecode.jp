/**
 * Created by avzal on 06.12.2016.
 */
(function(){
	"use strict";
	angular.module("use")
		.directive("useVisibility",useVisibility);

	useVisibility.$inject=[];

	function useVisibility(){
		return {
			restrict:"A",
			scope   :{
				visibility:"=useVisibility"
			},
			link    :function(scope,element){
				function setVisibility(n,o){
					if(n===o)
						return;
					if(n)
						element.css("visibility","visible");
					else
						element.css("visibility","hidden");
				}

				setVisibility(scope.visibility,null);
				scope.$watch("visibility",setVisibility);
			}
		};
	}
})();