/**
 * Created by avzal on 23.12.2016.
 */
angular.module("config")
	.config(["$urlRouterProvider",function($urlRouterProvider){
		$urlRouterProvider.otherwise('/projects');
	}]);