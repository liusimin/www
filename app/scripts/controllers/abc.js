'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  
  .controller("con",function($scope,$http,getdata){
	getdata.ajax('http://www.somenote.cn:1510/test','get',function(data){
		console.log(data)
		$scope.data=data
	})
	getdata.ajax('http://www.somenote.cn:1510/test2','get',function(data1){
		console.log(data1)
		$scope.data1=data1
	})
	getdata.ajax('http://www.somenote.cn:1510/aut','get',function(data2){
		console.log(data2)
		$scope.data2=data2
	})
	
	

})
.directive("auto",function(){
	return{
		restrict:'AEMC', 
		template:'<div><li ng-repeat="i in d">{{i.title | limitTo:5}}{{i.title.length>5?".....":""}}</li><li ng-repeat="b in x">{{b.title | limitTo:5}}{{i.title.length>5?".....":""}}</li></div><div ><img  ng-repeat="t in s" ng-src="{{t.img}}" /></div>',
		scope:true,
		transclude: true,
		scope:{d:"=data",s:"=data2",x:"=data1"},
		link:function(s,e,attr){
			s.a=attr['b']
		}
		
	}
})

.service('getdata',function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
		}
	}
})

  