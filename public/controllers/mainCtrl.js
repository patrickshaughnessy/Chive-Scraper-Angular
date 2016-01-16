'use strict';

angular
  .module('app')
  .controller('mainCtrl', function($scope){
    $scope.$on('viewChange', function(event, view){
      $scope.view = view
    })
  })
