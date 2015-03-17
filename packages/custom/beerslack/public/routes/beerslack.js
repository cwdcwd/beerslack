'use strict';

angular.module('mean.beerslack').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('beerslack example page', {
      url: '/beerslack/example',
      templateUrl: 'beerslack/views/index.html'
    });
  }
]);
