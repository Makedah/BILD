'use strict';

/* Controllers */

var bildControllers = angular.module('bildControllers', []);

bildControllers.controller('ProjectsCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  }
]);