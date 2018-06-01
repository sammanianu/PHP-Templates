var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/librarySystem',{
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/librarySystem/create',{
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/librarySystem/:id/edit',{
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/librarySystem/:id/show',{
			templateUrl:'templates/show.html',
			controller:'empController'
		})
		.when('/librarySystem/home',{
			templateUrl:'views/home.html',
		})
		.when('/librarySystem/about',{
			templateUrl:'views/about.html',
		})
		.when('/librarySystem/employee',{
			templateUrl:'views/employee.html',
		})
		
		.otherwise({ redirectTo: '/'});
});

var myApp2 = angular.module('myApp2',['ngRoute']);
myApp2.config(function($routeProvider){
	$routeProvider
		.when('/librarySystem/register',{
			templateUrl:'views/register.html',
			controller:'regCtrl',
			controllerAs: 'register'
		})
		.otherwise({ redirectTo: '/'});
});
