'use strict';

/* jshint -W098 */
angular.module('mean.beerslack').controller('BeerslackController', ['$scope', 'Global', 'Beerslack',
  function($scope, Global, Beerslack) {
    $scope.global = Global;
    $scope.package = {
      name: 'beerslack'
    };
  }
]);
