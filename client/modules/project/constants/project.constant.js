/**
 * Created by avzal on 06.12.2016.
 */

(function(window,angular){
	"use strict";
	angular.module("app.project")
		.constant('ProjectConstant',{
			route:{
				'selected':'main.projects.selected',
				'blank'   :'main.projects.blank',
				'edit'    :'main.projects.selected.edit',
				'new'     :'main.projects.blank.new'
			}
		})
		.factory('ProjectApiConstant',ProjectApiConstant);

	ProjectApiConstant.$inject=["ApiConstant"];
	function ProjectApiConstant(ApiConstant){
		return {
			ApiUrls:{
				project:ApiConstant.basePath+"/projects/:action"
			}
		};
	}
})
(window,window.angular);
