'use strict';

angular
  .module('app')
  .directive('rankingView', function(){
    return {
      restrict: "AE",
      templateUrl: "directives/ranking-view/ranking-view.html",
      scope: {
        category: "@"
      },
      controller: function($scope, $rootScope, $firebaseArray){
        'use strict';

        var ref = new Firebase('https://chive-smash.firebaseio.com/chivegirls');

        $scope.$watch('category', function(newVal){
          $scope.girls = $scope.category ? $firebaseArray(ref.child($scope.category)) : undefined;
        });

      }
    }
  })
