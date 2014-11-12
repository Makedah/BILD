'use strict';

/* Controllers */

var bildControllers = angular.module('bildControllers', []);

bildControllers.controller('ProjectsCtrl', ['$scope', 'Projects',
  function($scope, Projects) {
    $scope.projects = Projects.query();
  }
]);

bildControllers.controller('NewProjectCtrl', ['$scope', 'NewProjectService',
  function($scope, NewProjectService) {
    $scope.project = NewProjectService.get();
    
    $scope.preview = function(project) {
      if (project != undefined) {
        NewProjectService.set(project);
        window.location.href += '/preview';
      } 
    };
  }
]);

bildControllers.controller('ProjectPreviewCtrl', ['$scope', 'NewProjectService',
  function($scope, NewProjectService) {
      $scope.project = NewProjectService.get();
      console.log($scope.project);

      $scope.publish = function() {
        console.log('save into json -> display json on the projects page');
        window.location.href = '/app/#/projects';
      };

      $scope.cancel = function() {
        window.location.href = '/app/#/createnew';
      }
      
    }
]);