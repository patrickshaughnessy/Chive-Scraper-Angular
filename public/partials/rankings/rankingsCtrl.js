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
    // $scope.girls = [];

    // ref.on('value', function(snap){
    //
    // })


    // ref.child('asian').on('value', function(snap){
    //   snap.forEach(function(girl){
    //     $scope.$apply(function(){
    //       $scope.girls.push(girl.val());
    //     })
    //   })
    // })
    //
    // ref.child('findher').on('value', function(snap){
    //   snap.forEach(function(girl){
    //     $scope.girls.push(girl.val());
    //   })
    // })
    //
    // ref.child('cute').on('value', function(snap){
    //   snap.forEach(function(girl){
    //     $scope.girls.push(girl.val());
    //   })
    // })

  })
