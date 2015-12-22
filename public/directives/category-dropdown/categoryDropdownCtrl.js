'use strict';

angular
  .module('app')
  .controller('categoryDropdownCtrl', function($scope, $rootScope){
    console.log($scope.view);

    $scope.category = "Choose A Category"

    $scope.changeCategory = function(category){
      console.log('category', category);
      switch(category){
        case 'asian':
          $scope.category = 'Asian';
          break;
        case 'cute':
          $scope.category = 'Cute';
          break;
        case 'findher':
          $scope.category = 'Find Her';
          break;
        default:
          $scope.category = 'Choose A Category'
      }
      $rootScope.views[$scope.view] = category;
      console.log($rootScope.views);
    }
  })
