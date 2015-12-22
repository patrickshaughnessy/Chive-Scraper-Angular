'use strict';

angular
  .module('app', ['ui.router', 'firebase'])

  .config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'partials/main/main.html',
        controller: 'mainCtrl'
      })
      .state('main.asian', {
        url: 'asian',
        templateUrl: 'partials/main/asian/asian.html',
        controller: 'asianCtrl'
      })
      .state('main.cute', {
        url: 'cute',
        templateUrl: 'partials/main/cute/cute.html',
        controller: 'cuteCtrl'
      })
      .state('main.findher', {
        url: 'findher',
        templateUrl: 'partials/main/findher/findher.html',
        controller: 'findherCtrl'
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
