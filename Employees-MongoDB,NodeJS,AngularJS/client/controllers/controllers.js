myApp.controller('empController', function($scope, $route, $routeParams, $http){
	$scope.getEmployees = function(){
		$http.get('/api/librarySystem/').then(function(response){
			$scope.librarySystem = response.data;
		});
	};

	$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.get('/api/librarySystem/'+ id).then(function(response){
			$scope.employee = response.data;
		});
	};
});