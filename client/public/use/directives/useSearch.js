/**
 * Created by avzal on 06.12.2016.
 */
(function(){
	"use strict";
	angular.module("use")
		.directive("useSearch",useSearch);

	useSearch.$inject=["$timeout"];

	function useSearch($timeout){
		return {
			restrict:"E",
			replace :true,
			scope   :{
				pending :"=",
				onSearch:"&",
			},
			template:"<input ng-change='pendingSearch()' aria-label='search' />",
			link    :function(scope){
				var timeoutID=null;
				var cacheSearch=null;
				scope.pendingSearch=function(){
					if(timeoutID)
						$timeout.cancel(timeoutID);
					cacheSearch=scope.search;
					timeoutID=$timeout(function(){
						if(cacheSearch===scope.search){
							scope.onSearch({searchText:scope.search});
						}
					},scope.pending);
				}
			}
		}
	}
})();