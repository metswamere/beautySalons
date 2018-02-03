'use strict';
/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html'
      });
    $urlRouterProvider.otherwise('/');
    var config = {
      apiKey: 'AIzaSyDaITsaZx5wY7WfHsBK1PJkAHOSg9Z8Xhk',
      authDomain: 'beauty-salon-50ea7.firebaseapp.com',
      databaseURL: 'https://beauty-salon-50ea7.firebaseio.com',
      storageBucket: 'beauty-salon-50ea7.appspot.com',
      messagingSenderId: '747339624327',
    };
    firebase.initializeApp(config);
  })
  .constant('FirebaseUrl', '');