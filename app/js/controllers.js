'use strict';

/* Controllers */

var bildControllers = angular.module('bildControllers', []);

bildControllers.controller('ProjectsCtrl', ['$scope', 'Projects', 'NewProjectService',
  function($scope, Projects, NewProjectService) {
    $scope.projects = Projects.query();

    $scope.projects.$promise.then(function(data) {
       $scope.projectsCount = data.length;
       $scope.projectsValue = 0;
        for (var i = 0; i < data.length; i++) {
          $scope.projectsValue += data[i].value;
        }
    });

    $scope.setSelected = function() {
        $scope.selected = this.project;

        var isEmpty = jQuery.isEmptyObject($scope.selected);
        if (!isEmpty && $scope.selected != undefined) {
          NewProjectService.set($scope.selected);
          window.location.href = '/app/#/projects/' + $scope.selected.id;
        }
    };
  }
]);

bildControllers.controller('ProjectDetailsCtrl', ['$scope', 'NewProjectService',
  function($scope, NewProjectService) {
    $scope.project = NewProjectService.get();
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
      
      $scope.publish = function() {
        console.log('save into json -> display json on the projects page');
        window.location.href = '/app/#/projects';
      };

      $scope.cancel = function() {
        window.location.href = '/app/#/createnew';
      }
      
    }
]);