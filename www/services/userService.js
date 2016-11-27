'use strict';

var app = angular.module('uome.userservice',[]);

app.factory('userService', ["$http", function ($http){
	var getAll = function(){

	};

	var getById = function(id){

	};

	var getByUsername = function(username){
		return $http.get('ajax/users/getByName.php', + username).then(handleSuccess, handleError('Error getting user by username'));
	};

	var create = function(user){
		return $http.post('ajax/users/create.php', user).then(handleSuccess, handleError("Error creating user"));
	};

	var update = function(user){

	};

	var deleteUser = function(id){

	};

	var handleSuccess = function(res) {
            return res.data;
        }
 
   	var handleError = function(error) {
        return function () {
            return { success: false, message: error };
        };
    }

	return{
		getAll: getAll,
		getById: getById,
		getByUsername: getByUsername,
		create: create,
		update: update,
		deleteUser: deleteUser
	};
}]);