// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('uome', ['ionic', 'LocalStorageModule',
                              'uome.main',
                              'ui.router',
                              'uome.authentication',
                              'uome.userservice',
                              'uome.login']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('uome');
});

app.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider.state('home',{
    url:'/home',
    templateUrl: 'views/home.html',
  });

  $stateProvider.state('new-payment',{
    url:'/new-payment',
    templateUrl: 'views/new-payment.html' 
  });

  $stateProvider.state('login',{
    url:'/login',
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  });

  $stateProvider.state('register',{
    url:'/register',
    templateUrl: 'views/register.html',
    controller: 'LoginController'
  });


  $urlRouterProvider.otherwise('/home');

});



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



