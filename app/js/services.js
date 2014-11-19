'use strict';

/* Services */

var bildServices = angular.module('bildServices', ['ngResource']);

bildServices.factory('Projects', ['$resource',
  function($resource){
    return $resource('data/projects.json', {}, {
      query: { 
        method:'GET', 
        isArray : true 
      }
    });
  }
]);

bildServices.factory('Companies', ['$resource',
  function($resource){
    return $resource('data/companies.json', {}, {
      query: {
        method:'GET', 
        isArray:true
      }
    });
  }
]);

bildServices.factory('NewProjectService', 
	function() {
		var project = {};

		var setProject = function(data) {
			project = data;
		}

		var getProject = function(){
      		return project;
  		}

	    return {
		    set: setProject,
		    get: getProject
	  	}
	}
);
