/**
 * Created by avzal on 19.01.2017.
 */
(function(window,angular){
	"use strict";
	angular.module("use")
		.filter("moment_calendar",moment_calendar);

	moment_calendar.$inject=["moment"];

	function moment_calendar(moment){
		return function(input,format){
			var m=moment.isMoment(input)?input:moment(input,format);
			return m.calendar(null,{
				sameDay: '[Today]',
				nextDay: '[Tomorrow]',
				nextWeek: 'dddd [(]DD.MM.YYYY[)]',
				lastDay: '[Yesterday]',
				lastWeek: 'dddd [(]DD.MM.YYYY[)]',
				sameElse: 'dddd [(]DD.MM.YYYY[)]'
			});
		}
	}
})(window,window.angular);