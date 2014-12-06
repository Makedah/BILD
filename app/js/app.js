'use strict';

/* App Module */

var bildApp = angular.module('bildApp', [
  'ngRoute',
  'ui.router',
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
      when('/aboutus', {
        templateUrl: 'partials/aboutus.html'
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
      when('/business', {
        templateUrl: 'partials/business.html'
      }).
      when('/business/register', {
        templateUrl: 'partials/business/register.html'
      }).
      when('/business/profile', {
        templateUrl: 'partials/business/profile.html'
      }).
      when('/contactus', {
        templateUrl: 'partials/contactus.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

bildApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tasks', {
      templateUrl: "partials/projectDetails/tasks.html"
    })
    .state('bids', {
      templateUrl: "partials/projectDetails/bids.html"
    })
    .state('messages', {
      templateUrl: "partials/projectDetails/messages.html"
    })
    .state('media', {
      templateUrl: "partials/projectDetails/media.html"
    })
    .state('library', {
      templateUrl: "partials/projectDetails/library.html"
    })
    .state('mission', {
      templateUrl: "partials/aboutUs/mission.html"
    })
    .state('team', {
      templateUrl: "partials/aboutUs/team.html"
    })
});
