'use strict';

angular
  .module('app')
  .controller('rankingsCtrl', function($scope, $rootScope, $firebaseArray){
    var ref = new Firebase('https://chive-smash.firebaseio.com/chivegirls');
    $scope.girls = $firebaseArray(ref);

    $rootScope.views = {};
    $rootScope.$watch(function(newVal){
      $scope.views = newVal.views;
    })

  })
