'use strict';

angular.module('jacobharasimoApp')
    .controller('ProjectsCtrl', function ($scope,$routeParams,Page,projects) {
        var projectID = $routeParams.id

        Page.setTitle("Projects");

        $scope.ProjectList=projects.get({},function(response){

        });
        if(projectID){
            //$(".has-dropdown").removeClass("hover");
            Page.setTitle(projectID.replace(/_/g," "));
            setTimeout(function(){
                $("#page").scrollTo("#"+projectID)
            },1500)//delay here must match the loading delay of the ng-animation
        }
    });