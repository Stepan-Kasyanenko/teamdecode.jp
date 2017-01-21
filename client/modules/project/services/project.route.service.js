/**
 * Created by avzal on 17.01.2017.
 */
/**
 * Created by avzal on 27.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.service("ProjectRouteService",ProjectRouteService)

	ProjectRouteService.$inject=["$state","ProjectConstant","TaskConstant"];
	function ProjectRouteService($state,ProjectConstant,TaskConstant){
		return {
			'new'  :function(){
				return go(ProjectConstant.route.new,arguments);
			},
			'blank':function(){
				return go(ProjectConstant.route.blank,arguments);
			},
			'selected':function(){
				return go(TaskConstant.route.tasks,arguments);
			},
			'edit':function(){
				return go(ProjectConstant.route.edit,arguments);
			}
		}

		function go(stateName,args){
			var arr = [stateName].concat([].slice.call(args));
			return $state.go.apply($state,arr);
		}
	}
})(window,window.angular);
