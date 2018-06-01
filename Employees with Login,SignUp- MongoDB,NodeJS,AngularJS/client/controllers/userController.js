var userControllers = angular.module('userControllers', [])

userControllers.controller('regCtrl', function(){
	this.regUser = function(){
		console.log('testing new button');
	};
});
