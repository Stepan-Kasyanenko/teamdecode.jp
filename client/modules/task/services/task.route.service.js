(function(window,angular){
	"use strict";
	angular.module("app.task")
		.service("TaskRouteService",TaskRouteService)

	TaskRouteService.$inject=["$state","TaskConstant"];
	function TaskRouteService($state,TaskConstant){
		return {
			'tasks':function(){
				return go(TaskConstant.route.tasks,arguments);
			},
			'new':function(){
				return go(TaskConstant.route.new,arguments);
			},
			'edit':function(){
				return go(TaskConstant.route.edit,arguments);
			},
			'view':function(){
				return go(TaskConstant.route.view,arguments);
			}
		}

		function go(stateName,args){
			var arr=[stateName].concat([].slice.call(args));
			return $state.go.apply($state,arr);
		}
	}

})(window,window.angular);
