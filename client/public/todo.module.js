/**
 * Created by avzal on 06.12.2016.
 */
angular.module("todo",["dependency","modules","myDependency"]);

angular.module("dependency",['ui.router','ngResource','ngAnimate','ngCookies','ngMessages','ngMaterial','angular-loading-bar','angular.filter']);

angular.module("myDependency",['use','config']);
angular.module("modules",["app.main","app.account","app.session","app.project","app.task","app.sidenav"]);
