/**
 * Created by avzal on 06.12.2016.
 */

(function(window,angular){
	"use strict";
	angular.module("app.project")
		.constant('ProjectConstant',{
			ApiUrls:{
				project :"https://api-test-task.decodeapps.io/projects/:action",
			},
			route  :{
				'selected':'main.projects.selected',
				'blank'   :'main.projects.blank',
				'edit'    :'main.projects.selected.edit',
				'new'     :'main.projects.blank.new',
			}
		});
})(window,window.angular);
