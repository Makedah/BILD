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
      when('/projects', {
        templateUrl: 'partials/projects.html'
      }).
      when('/createnew', {
        templateUrl: 'partials/newproject.html'
      }).
      when('/createnew/preview', {
        templateUrl: 'partials/newprojectpreview.html'
      }).
      when('/contactus', {
        templateUrl: 'partials/contactus.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
