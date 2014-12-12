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

    $scope.itemsPerPage = 5;
    console.log('items pers page: ' + $scope.itemsPerPage);
    $scope.currentPage = 0;
    
    $scope.range = function() {
      
      var ret = [];
      var start;

      start = $scope.currentPage;
      var pageCount = $scope.pageCount();

      if (pageCount > 0) {

        var rangeSize = Math.ceil($scope.companiesCount / $scope.itemsPerPage);
        if (start >  pageCount - rangeSize) {
          start = $scope.pageCount() - rangeSize + 1;
        }

        for (var i = 0; i < rangeSize; i++) {
          ret.push(i);
        }
      } 
      return ret;
    };

    $scope.prevPage = function() {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
    }
    };

    $scope.prevPageDisabled = function() {
      return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function() {
      if ($scope.companiesCount != undefined) {
        return Math.ceil($scope.companiesCount / $scope.itemsPerPage);
      }
      else return 0;
    };

    $scope.nextPage = function() {
      if ($scope.currentPage < $scope.pageCount()-1 && $scope.pageCount() > 1) {
        $scope.currentPage++;
      }
    };

    $scope.nextPageDisabled = function() {
      return $scope.currentPage === ($scope.pageCount()-1) ? "disabled" : "";
    };

    $scope.setPage = function(n) {
      $scope.currentPage = n;
    };

    $scope.isSearchFieldEmpty = true;

     $scope.onSearchNameChange = function() {
      if ($scope.searchText.name == "" || typeof $scope.searchText.name === 'undefined') {
        $scope.isSearchFieldEmpty = true;
      } else {
        $scope.isSearchFieldEmpty = false;
      }
     };

     $scope.onSearchLocationChange = function() {
      if ($scope.searchText.location == "" || typeof $scope.searchText.location === 'undefined') {
        $scope.isSearchFieldEmpty = true;
      } else {
        $scope.isSearchFieldEmpty = false;
      }
     };
  }
]);

bildControllers.controller('CorporationsCtrl', ['$scope',
  function($scope) {
    $(document).ready(function() {

      var sublists = $(".sublist");
      $(".morelink").click(function() {
        for (var i=0; i < sublists.length; i++) {
          if ($(".sublist")[i].style.display == "none") {
            $(".sublist")[i].style.display = "block";
          }
        }

        $(".morelink")[0].style.display = "none";
        $(".lesslink")[0].style.display = "block";
        
      });

      $(".lesslink").click(function() {
        for (var i=0; i < sublists.length; i++) {
          if ($(".sublist")[i].style.display == "block") {
            $(".sublist")[i].style.display = "none";
          }
        }
        $(".morelink")[0].style.display = "block";
        $(".lesslink")[0].style.display = "none";
      });
    });
  }
]);

bildControllers.controller('UserCtrl', ['$scope',
  function($scope) {
     // if ($scope.user != undefined) {
      $scope.user = {};
      $scope.user.name = 'Corporation';
      $scope.user.logo = 'img/Corporation-logo.png';
    // }
     $scope.login = function() {
      $scope.user = {};
      $scope.user.name = 'Corporation';
      $scope.user.logo = 'img/Corporation-logo.png';
     }
     $scope.logout = function() {
        $scope.user = undefined;
        window.location.href = '/app/#/';
     }
  }
]);

bildControllers.controller('AboutUsCtrl', ['$scope', '$state',
  function($scope, $state) {
    $state.go('mission');
  }
]);

bildControllers.controller('NewBusinessCtrl', ['$scope', 'NewFirmService',
  function($scope, NewFirmService) {
    $scope.firm = NewFirmService.get();
    $scope.firm.receits = [];    
    $scope.firm.officers = [];
    $scope.firm.managers = [];

    $scope.addReceit = function(receit) {
      $scope.firm.receits.push(receit);
      $scope.receit = {};
    };

    $scope.addOfficer = function(officer) {
      $scope.firm.officers.push(officer);
      $scope.officer = {};
    };

    $scope.addOfficer = function(officer) {
      $scope.firm.officers.push(officer);
      $scope.officer = {};
    };
    $scope.addManager = function(manager) {
      $scope.firm.managers.push(manager);
      $scope.manager = {};
    };
    $scope.submit = function(firm) {
      if (firm != undefined) {
        console.log(firm);
        NewFirmService.set(firm);
        window.location.href = '/app/#/business/profile';
      } 
    };
    $scope.save = function(firm) {
      console.log('save firm profile');
    };
  }
]);

bildControllers.controller('BusinessProfileCtrl', ['$scope', 'SmallBusiness', 'SmallBusinessProjects',
  function($scope, SmallBusiness, SmallBusinessProjects) {
    $scope.firm = SmallBusiness.query();
    $scope.firm.$promise.then(function(data) {
       console.log(data);
    });
    $scope.projects = SmallBusinessProjects.query();
    $scope.projects.$promise.then(function(data) {
       console.log(data);
    });

    $scope.addProject = function() {
      window.location.href = '/app/#/business/projects';
    };
  }
]);

bildControllers.controller('BusinessProjectsCtrl', ['$scope',
  function($scope) {



  }
]);

bildControllers.controller('CalculatorCtrl', ['$scope', 'Projects',
  function($scope, Projects) {
    $scope.projects = Projects.query();
    $scope.goalAmount = 0;
    $scope.bidGoalAmount = 0;

    $scope.projects.$promise.then(function(data) {
        console.log($scope.projects);
    });
    $scope.selectProject = function() {
      var project = $scope.project;
      console.log(project);

      $scope.goalAmount = project.value * project.goalPercentage / 100;
      $scope.bidGoalAmount = project.bidValue * project.goalPercentage / 100;
      
    }
  }
]);

