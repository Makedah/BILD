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

bildServices.factory('SmallBusiness', ['$resource',
  function($resource){
    return $resource('data/small-business-example.json', {}, {
      query: { 
        method:'GET', 
        isArray : false 
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

bildServices.factory('NewFirmService', 
  function() {
    var firm = {};
    var setFirm = function(data) {
      firm = data;
    }
    var getFirm = function(){
          return firm;
    }
    return {
      set: setFirm,
      get: getFirm
    }
  }
);