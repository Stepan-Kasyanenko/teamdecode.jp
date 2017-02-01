(function(window,angular){
	"use strict";
	angular.module("app.task")
		.service("TaskResource",TaskResource)
		.service("TasksResource",TasksResource)
		.service("TaskService",TaskService);

	TaskResource.$inject=["$resource","TaskApiConstant"];
	function TaskResource($resource,TaskApiConstant){
		return $resource(TaskApiConstant.ApiUrls.task,{action:""},{complete:{method:"POST",params:{action:"complite"},isArray:false}});
	}

	TasksResource.$inject=["$resource","TaskApiConstant"];
	function TasksResource($resource,TaskApiConstant){
		return $resource(TaskApiConstant.ApiUrls.tasks,{},{query:{method:"GET",isArray:false}});
	}

	TaskService.$inject=["TaskResource","TasksResource","TaskConstant","moment"];
	function TaskService(TaskResource,TasksResource,TaskConstant,moment){
		return {
			save    :save,
			delete:  deleteTask,
			get     :get,
			complete:complete,
			list   :list
		};

		function save(task){
			return TaskResource.save(task).$promise;
		}

		function get(params){
			return TaskResource.get(params).$promise;
		}

		function complete(task){
			return TaskResource.complete(task).$promise;
		}

		function list(params){
			return TasksResource.query(params)
				.$promise
				.then(function(res){
					return {
						total:res.total_count,
						rows :res.tasks.map(function(m){
							//We need format, because  moment in filter throw warning
							m.Task.created_at_day=moment(m.Task.created_at,TaskConstant.formats.date.task).startOf("day").format("YYYY-MM-DD");
							return m;
						})
					};
				});
		}

		function deleteTask(params){
			return TaskResource.delete(params).$promise;
		}
	}
})(window,window.angular);
