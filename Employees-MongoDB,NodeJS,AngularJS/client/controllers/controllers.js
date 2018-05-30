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

	$scope.addEmployee = function(){
		$http.post('/api/librarySystem/', $scope.employee).then(function(response){
			window.location.href = '/';
		});
	};

	$scope.updateEmployee = function(){
		var id = $routeParams.id;
		$http.put('/api/librarySystem/'+ id, $scope.employee).then(function(response){
			window.location.href = '/';
		});
	};

	$scope.deleteEmployee = function(id){
		var id = id;
		$http.delete('/api/librarySystem/'+ id).then(function(response){
			$route.reload();
		});
	};
});