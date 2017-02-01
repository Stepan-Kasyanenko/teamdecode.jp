/**
 * Created by avzal on 27.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("app.project")
		.service("ProjectResource",ProjectResource)
		.service("ProjectService",ProjectService);

	ProjectResource.$inject=["$resource","ProjectApiConstant"];
	function ProjectResource($resource,ProjectApiConstant){
		return $resource(ProjectApiConstant.ApiUrls.project,{action:"project"},{query:{method:"GET",isArray:false,params:{action:""}}});
	}

	ProjectService.$inject=["ProjectResource"];
	function ProjectService(ProjectResource){
		return {
			save    :save,
			delete  :deleteProject,
			get     :get,
			list    :list
		};

		function save(project){
			return ProjectResource.save(project).$promise;
		}

		function get(params){
			return ProjectResource.get(params).$promise;
		}

		function deleteProject(params){
			return ProjectResource.delete(params).$promise;
		}

		function list(params){
			return ProjectResource.query(params).$promise;
		}
	}
})(window,window.angular);
