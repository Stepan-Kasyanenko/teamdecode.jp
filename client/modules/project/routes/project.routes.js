/**
 * Created by avzal on 06.12.2016.
 */

(function(window,angular){
	"use strict";

	angular.module("app.project")
		.config(RouteConfig);

	RouteConfig.$inject=["$stateProvider","ProjectConstant"];

	function RouteConfig($stateProvider,ProjectConstant){
		$stateProvider
			.state('main.projects',{
				url     :'projects',
				abstract:true
			})
			.state(ProjectConstant.route.blank,{
				url      :'',
				component:"appProjectList",
				resolve  :{
					projects:["ProjectService",function(ProjectService){
						return ProjectService.list().then(function(res){ return res.projects;});
					}]
				}
			})
			.state(ProjectConstant.route.selected,{
				url      :'/{id:[0-9]{1,}}',
				component:'appProjectList',
				abstract :true,
				resolve  :{
					projects  :["ProjectService","$stateParams","ProjectRouteService",function(ProjectService,$stateParams,ProjectRouteService){
						return ProjectService.list()
							.then(function(res){
								if(!res.projects.filter(function(m){return m.Project.id==$stateParams.id})[0])
									throw new ProjectNotFoundException($stateParams.id);
								return res.projects;
							})
							.catch(function(res){
								if(res instanceof ProjectNotFoundException)
									ProjectRouteService.blank();
								else
									throw res;
							});
					}],
					selectedID:["$stateParams",function($stateParams){
						return $stateParams.id;
					}]
				}
			})
			.state(ProjectConstant.route.edit,{
				url    :'/edit',
				views  :{
					'project-form@main':{
						component:'appProjectForm',
					}
				},
				resolve:{
					isShow :function(){
						return true;
					},
					project:["ProjectService","$stateParams",function(ProjectService,$stateParams){
						return ProjectService.get({project_id:$stateParams.id}).then(function(res){
							return res;
						});
					}]
				}
			})
			.state(ProjectConstant.route.new,{
				url    :'/new',
				views  :{
					'project-form@main':{
						component:'appProjectForm',
					}
				},
				resolve:{
					isShow :function(){
						return true;
					},
					project:["ProjectResource",function(ProjectResource){
						var newProject=new ProjectResource();
						newProject.Project={};
						return newProject;
					}]
				}
			});
	}

	function ProjectNotFoundException(project_id){
		this.project_id=project_id;
	}

	ProjectNotFoundException.prototype.toString=function(){
		return "Project "+this.project_id+" not found";
	}

})(window,window.angular);
