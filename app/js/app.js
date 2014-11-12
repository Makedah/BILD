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
        templateUrl: 'partials/projects.html',
         controller: 'ProjectsCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'partials/projectDetails.html',
        controller: 'ProjectDetailsCtrl'
      }).
      when('/createnew', {
        templateUrl: 'partials/newproject.html',
        controller: 'NewProjectCtrl'
      }).
      when('/createnew/preview', {
        templateUrl: 'partials/newprojectpreview.html',
        controller: 'ProjectPreviewCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html'
      }).
      when('/search', {
        templateUrl: 'partials/search.html'
      }).
      when('/contactus', {
        templateUrl: 'partials/contactus.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
