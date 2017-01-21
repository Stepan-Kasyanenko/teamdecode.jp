/**
 * Created by avzal on 23.12.2016.
 */
(function(window,angular){
	"use strict";
	angular.module("config")
		.config(["$httpProvider",function($httpProvider){
			$httpProvider.interceptors.unshift($httpProviderConfig);
		}]);

	$httpProviderConfig.$inject=["$q","$injector"];

	function $httpProviderConfig($q,$injector){
		var adder=new AddSessionClass();

		var ToastService=null;
		function getToast(){
			return ToastService || (ToastService=$injector.get("ToastService"));
		}

		var SessionService=null;
		function getSessionService(){
			return SessionService || (SessionService=$injector.get("SessionService"));
		}

		return {
			request      :function(config){
				config=adder.addSession(config,getSessionService().getSession());
				return config;
			},
			responseError:function(response){
				if(response.status===-1)
					getToast().error("Check your internet connection");
				if(response.data){
					getToast().error(response.data.message);
					return $q.reject(response);
				}
				return $q.reject(response);
			}
		};
	}

	function AddSessionClass(){
		this.regexp=/api-test-task\.decodeapps\.io/i;
	}

	AddSessionClass.prototype.isApiAri=function(url){
		return this.regexp.test(url);
	}

	AddSessionClass.prototype.addSession=function(config,session){
		if(!this.isApiAri(config.url) || !session)
			return config;
		switch(config.method){
			case "GET":
				config.params=config.params || {};
				config.params.session=session;
				break;
			case "DELETE":
				config.params=config.params || {};
				config.params.session=session;
				break;
			case "POST":
				config.data=config.data || {};
				config.data.session=session;
				break;
		}
		return config;
	}
})(window,window.angular);
