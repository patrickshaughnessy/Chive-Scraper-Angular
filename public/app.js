'use strict';

angular
  .module('app', ['ui.router', 'firebase'])

  .config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/main')

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'partials/main/main.html',
        controller: 'mainCtrl'
      })
      .state('main.toggleView', {
        url: '/:category',
        templateUrl: 'partials/main/toggleView/toggleView.html',
        controller: 'toggleViewCtrl'
      })
      .state('rankings', {
        url: '/rankings',
        templateUrl: 'partials/rankings/rankings.html',
        controller: 'rankingsCtrl'
      });

  })
  .directive('categoryDropdown', function(){
    return {
      scope: {
        view: "@view"
      },
      templateUrl: "directives/category-dropdown/category-dropdown.html",
      controller: "categoryDropdownCtrl"
    }
  })
  .directive('rankingView', function(){
    return {
      scope: {
        category: "@category"
      },
      templateUrl: "directives/ranking-view/ranking-view.html",
      controller: "rankingViewCtrl"
    }
  })
