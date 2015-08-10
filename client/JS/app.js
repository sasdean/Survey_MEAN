var survey_app = angular.module("survey_app", ['ngRoute']);

  survey_app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: '/partials/home.html'
        })
        .when('/dashboard',{
            templateUrl: '/partials/dashboard.html'
        })
        .when('/create',{
            templateUrl: '/partials/create.html'
        })
        .when('/poll',{
            templateUrl: '/partials/poll.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });