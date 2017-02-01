/**
 * Created by avzal on 06.12.2016.
 */
(function(){
	"use strict";
	angular.module("use")
		.directive("useSearch",useSearch);

	function useSearch(){
		return {
			restrict        :"E",
			replace         :true,
			scope           :{
				ngModel    :"=",
				pending    :"<",
				onSearch   :"&",
				clearButton:"<?",
				mdColors   :"<?"
			},
			bindToController:true,
			controller      :useSearchController,
			controllerAs    :"vm",
			template        :['<span><input class="useSearchInput" style="border:1px solid #eee;padding:6px 4px;border-right:0px;" md-colors="vm.mdColors" ng-model="vm.ngModel" ng-change="vm.pendingSearch()" aria-label="search" placeholder="Search..." />',
												'<md-button style="padding:0px;width:30px;min-width:30px;border:1px solid #eee;border-left:0px;height:37px;margin-left:0;margin-bottom:2px;" ng-show="vm.clearButton" ng-click="vm.clearSearch()" class="btn-clear-search" aria-label="Clear search">',
												'<md-tooltip>Clear search</md-tooltip>',
												'<span md-colors="{color:\'accent-A100\'}" class="b-size" data-size="26"><i class="icons8-delete-2"></i></span>',
												'</md-button>',
												'<style type="text/css">.useSearchInput:focus{outline:0}</style></span>'].join(""),
		};
	}

	useSearchController.$inject=["$timeout"];
	function useSearchController($timeout){
		var vm=this;
		var timeoutID=null;
		var cacheSearch=null;
		vm.pendingSearch=pendingSearch;
		vm.clearSearch=clearSearch;
		if(!(vm.onSearch instanceof Function))
			vm.onSearch=angular.noop;
		function pendingSearch(){
			if(timeoutID)
				$timeout.cancel(timeoutID);
			cacheSearch=vm.ngModel;
			timeoutID=$timeout(function(){
				if(cacheSearch===vm.ngModel){
					vm.onSearch({searchText:vm.ngModel});
				}
			},vm.pending);
		}

		function clearSearch(){
			vm.ngModel=undefined;
			$timeout(function(){
				vm.onSearch({searchText:vm.ngModel});
			},0);
		}
	}
})();