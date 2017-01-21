/**
 * Created by avzal on 06.12.2016.
 */
angular.module("use")
	.service('Md5Service',[function(){
		if(!("md5" in window))
			console.error("md5 is not defined");
		return {
			hash:function(){
				return md5.apply(md5,arguments);
			}
		};
	}]);