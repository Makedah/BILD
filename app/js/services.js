'use strict';

/* Services */

var bildServices = angular.module('bildServices', ['ngResource']);

bildServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);
