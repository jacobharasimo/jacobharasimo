'use strict';

angular.module('jacobharasimoApp', ['ngRoute','ngAnimate','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                PageTitle:"home",
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/Contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/About', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/Projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl'
            })
            .when('/Projects/:id', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function($rootScope,Page){
        $(document).foundation();
        //Get the inital height of the page and set the container to this height
        var browser = angular.element(window);
        $rootScope.PageStyle={height:browser.height()-$('.top-bar').height()};

        $rootScope.$on('$routeChangeSuccess', function() {
            //hack to make sure drop downs close
            setTimeout(function(){
                $(".hover").removeClass("hover");
            },0)
        });
        //Bind the resize of the browser window to update this value
        browser.bind('resize',function(){
            $rootScope.PageStyle.height=browser.height()-$('.top-bar').height();
            $rootScope.$digest();
        });

    });
