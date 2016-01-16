'use strict';

angular
  .module('app', ['ui.router', 'firebase', 'ngAnimate'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('rankings', {
        url: '/rankings',
        templateUrl: 'partials/rankings.html',
        controller: 'rankingsCtrl'
      })
      .state('main', {
        url: '',
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
      })
      .state('main.toggleView', {
        url: '/:category',
        templateUrl: 'partials/main.toggleView.html',
        controller: 'toggleViewCtrl'
      })

    $locationProvider.html5Mode(true);

  })
