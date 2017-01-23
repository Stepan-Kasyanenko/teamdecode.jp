/**
 * Created by avzal on 23.12.2016.
 */
(function(window,angular){
    "use strict";
	angular.module("config")
		.config(["cfpLoadingBarProvider",function(cfpLoadingBarProvider){
			cfpLoadingBarProvider.includeSpinner=false;
		}])
})(window,window.angular);
