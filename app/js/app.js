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
      when('/projects', {
        templateUrl: 'partials/projects.html'
      }).
      otherwise({
        redirectTo: '/index.html'
      });
  }]);
