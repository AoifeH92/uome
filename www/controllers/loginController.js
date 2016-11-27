'use strict';

var app  = angular.module('uome.login',[]);

app.controller('LoginController', ['$location', 'authenticationService', '$scope', function ($location, authenticationService, $scope){
	$scope.initController = function(){
		authenticationService.clearCredentials();
	};

	$scope.login = function(){
		console.log($scope.username);
		console.log($scope.password);

		$scope.dataLoading = true;
		authenticationService.login($scope.username, $scope.password, function (response){
			if(response.auth == true){
				authenticationService.setCredentials($scope.username, $scope.password);
				$location.path('/');
			}
			else if(response.auth == 'no_user'){
				console.error("User does not exist");
			}
			else if(response.auth == 'not_authorized'){
				console.error("Incorrect password");
			}
			else{
				console.error("Failed to login");
				$scope.dataLoading = false;
			}
		})
	}
}]);