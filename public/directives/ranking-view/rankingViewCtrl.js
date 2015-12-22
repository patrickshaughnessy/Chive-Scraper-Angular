'use strict';

angular
  .module('app')
  .controller('rankingViewCtrl', function($scope, $rootScope, $firebaseArray){
    var ref = new Firebase('https://chive-smash.firebaseio.com/chivegirls');
    $scope.girls;

    $scope.$watch('category', function(newVal){
      console.log('newVal', $scope.girls);
      $scope.girls = $scope.category ? $firebaseArray(ref.child($scope.category)) : undefined;
    })



  })
