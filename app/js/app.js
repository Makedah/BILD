'use strict';

/* App Module */

var bildApp = angular.module('bildApp', [
  'ngRoute',
  'bildAnimations',
  'bildControllers',
  'bildFilters',
  'bildServices'
]);

bildApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html'
      }).
      when('/corporations', {
        templateUrl: 'partials/corporations.html'
      }).
      when('/contactus', {
        templateUrl: 'partials/contactus.html'
      }).
      otherwise({
        redirectTo: '/home.html'
      });
  }]);
