/**
 * Created by avzal on 06.12.2016.
 */
angular.module("app.main")
	.config(["$stateProvider","MainConstant",function($stateProvider,MainConstant){
		$stateProvider
			.state(MainConstant.route.root,{
				url     :'/',
				template:'<app-main layout-fill></app-main>',
				abstract:true,
				resolve :{
					session:["SessionService",function(SessionService){
						return SessionService.signup();
					}]
				}
			});
	}]);
