(function(window,angular){
	"use strict";
	angular.module("app.session")
		.service("SessionService",SessionService)

	SessionService.$inject=["$http","SessionConstant","$cookies","$q"];
	function SessionService($http,SessionConstant,$cookies,$q){
		return {
			createNewUser:createNewUser,
			checkSession :checkSession,
			getSession   :getSession,
			signup       :signup,
			signout      :signout
		};

		function signup(){
			var defer=$q.defer();
			var session=getSession();
			if(session){
				checkSession()
					.then(defer.resolve)
					.catch(function(){
						createNewUser()
							.then(defer.resolve)
							.catch(defer.reject);
					});
			}
			else{
				createNewUser().then(defer.resolve).catch(defer.reject);
			}
			return defer.promise;
		}

		function createNewUser(){
			return $http.post(SessionConstant.ApiUrls.signup)
				.then(function(resp){
					$cookies.put("session",resp.data.session);
				});
		}

		function checkSession(){
			return $http.get(SessionConstant.ApiUrls.session);
		}

		function getSession(){
			return $cookies.get("session");
		}

		function signout(){
			$cookies.remove("session");
			return $q.when();
		}
	}
})(window,window.angular);
