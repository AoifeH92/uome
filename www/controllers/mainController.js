'use strict';

var app = angular.module('uome.main', []);

app.controller('mainController', function ($scope, $ionicModal, localStorageService, $http){
	$scope.getPayments = function(){
		$http.get("ajax/payments.php")
			.then(function (response){
				$scope.payments = response.data.records;
				console.log($scope.payments);
			});

		$http.get("ajax/payments-owed.php")
			.then(function (response){
				$scope.paymentsOwed = response.data.records;
				console.log($scope.paymentsOwed);
			})
	}

	$scope.initDatePicker = function(){
		console.log('date');
		$('#paymentDate').datepicker({
            format: 'mm/dd/yyyy'
        });
	};

})