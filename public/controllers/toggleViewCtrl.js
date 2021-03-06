'use strict';

angular
  .module('app')
  .controller('toggleViewCtrl', function($timeout, $scope, $firebaseArray, $firebaseObject, $state, $stateParams){

    $scope.showRank = false;

    var ref = new Firebase(`https://chive-smash.firebaseio.com/chivegirls/${$stateParams.category}`);
    var girls = $firebaseObject(ref);

    girls.$loaded().then(function(){
      genRandomGirls(girls);
      $scope.$emit('viewChange', $stateParams.category);
    })

    function genRandomGirls(girls) {

      var keys = Object.keys(girls).slice(3);
      var randIdx1 = Math.floor(Math.random() * keys.length);
      var randIdx2 = Math.floor(Math.random() * keys.length);

      if (randIdx1 === randIdx2) {
        randIdx2++;
      }

      $scope.girl1 = $firebaseObject(ref.child(keys[randIdx1]));
      $scope.girl2 = $firebaseObject(ref.child(keys[randIdx2]));
    }

    $scope.rankGirl = function(num){
      if (num === 1){
        $scope.girl1.rank++
        $scope.girl1.$save()
      } else {
        $scope.girl2.rank++
        $scope.girl2.$save()
      }

      $scope.showRank = true;

      $timeout(function(){
        $scope.showRank = false;
        genRandomGirls(girls);
      }, 1000)

    }

    $scope.neither = function(){
      genRandomGirls(girls);
    }

  })
