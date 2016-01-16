angular
  .module('app')
  .directive('categoryDropdown', function(){
    return {
      restrict: "AE",
      templateUrl: "directives/category-dropdown/category-dropdown.html",
      scope: {
        view: "@"
      },
      controller: function($scope, $rootScope){
        'use strict';

        $scope.category = "Choose A Category"

        $scope.changeCategory = function(category){
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
            case 'burnbra':
              $scope.category = 'Burn Bra';
              break;
            case 'fuego':
              $scope.category = 'Fuego';
              break;
            case 'humpday':
              $scope.category = 'Hump Day';
              break;
            default:
              $scope.category = 'Choose A Category'
          }
          $rootScope.views[$scope.view] = category;
        }
      }
    }
  });
