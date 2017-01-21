/**
 * Created by avzal on 06.12.2016.
 */
angular.module("use")
	.directive('useWindowHeight',[function(){
		return {
			restrict:"A",
			scope   :{
				auto:"=useWindowHeight"
			},
			link    :function(scope,element){

				var watchID=null;
				if(scope.auto)
					bindWatch();
				//for(var p in window.document.body){
				//	if(/height/i.test(p))
				//		console.log(p,window.document.body[p]);
				//}
				setHeight(window.document.body.scrollHeight);
				scope.$watch("auto",watchAuto);
				setHeight(scope.visibility,null);

				function setHeight(n,o){
					if(n===o)
						return;
					console.log("setHeight",n);
					if(n){
						element.css("height",n+"px");
					}
				}

				function watchAuto(n,o){
					if(n===o)
						return;
					if(n)
						bindWatch();
					else
						unBindWatch();
				}

				function bindWatch(){
					scope.$watch(function(){return window.document.body.scrollHeight;},setHeight);
				}

				function unBindWatch(){
					if(watchID){
						watchID();
						watchID=null;
					}
				}
			}
		}
	}]);