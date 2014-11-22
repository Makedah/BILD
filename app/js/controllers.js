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
    $scope.bidPackagesCount = 0;
    if ($scope.project.bidPackages != undefined) {
      $scope.bidPackagesCount = $scope.project.bidPackages.length;
    }
  
  }
]);

bildControllers.controller('NewProjectCtrl', ['$scope', 'NewProjectService',
  function($scope, NewProjectService) {
    $scope.project = NewProjectService.get();
    $scope.project.bidPackages = [];
    $scope.project.users = [];
    $scope.project.files = [];

    $scope.addPackage = function(bidPackage) {
      if (bidPackage.value == undefined) {
        bidPackage.value = 0;
      }
      $scope.project.bidPackages.push(bidPackage);
      $scope.bidPackage = {};
    };

    $scope.addUser = function(user) {
      $scope.project.users.push(user);
      $scope.user = {};
    };

    $scope.setFiles = function(element) {
      $scope.$apply(function($scope) {
        console.log('files:', element.files);
        // Turn the FileList object into an Array 
        for (var i = 0; i < element.files.length; i++) {
          $scope.project.files.push(element.files[i])
        }
      });
    };

    $scope.preview = function(project) {
      if (project != undefined) {
        NewProjectService.set(project);
        window.location.href += '/preview';
      } 
    };
  }
]);

bildControllers.controller('ProjectPreviewCtrl', ['$scope', 'NewProjectService', 'Projects',
  function($scope, NewProjectService, Projects) {
      $scope.project = NewProjectService.get();

      $scope.publish = function(project) {
        console.log('save into json -> display json on the projects page');
        console.log(project);
       // Projects.save(project);
        window.location.href = '/app/#/projects';
      };

      $scope.cancel = function() {
        window.location.href = '/app/#/createnew';
      }
      
    }
]);

bildControllers.controller('SearchCtrl', ['$scope', 'Companies',
  function($scope, Companies) {
    $scope.companies = Companies.query();
    $scope.companies.$promise.then(function(data) {
       $scope.companiesCount = data.length;
    });
  }
]);

bildControllers.controller('CorporationsCtrl', ['$scope',
  function($scope) {
    $(document).ready(function() {

      var showChar = 200;
      var ellipsestext = "";
      var moretext = "more";
      var lesstext = "less";

      $('.more').each(function() {
        var content = $(this).html();
        var br = content.split('<br>',1).toString();
        showChar = br.length;

        if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

          $(this).html(html);
        }

      });

      $(".morelink").click(function(){
        if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
        } else {
          $(this).addClass("less");
          $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
      });
    });
  }
]);

bildControllers.controller('UserCtrl', ['$scope',
  function($scope) {
     $scope.user = {}; //undefined;
     $scope.user.name = 'Apple';
     $scope.user.logo = 'img/Apple-Logo-black.png';
  }
]);
