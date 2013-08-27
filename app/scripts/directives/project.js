'use strict';

angular.module('jacobharasimoApp')
    .directive('project', function () {
        return {
            templateUrl: 'projectItem.html',
            restrict: 'A',
            replace:'true',
            link: function postLink(scope, element, attrs) {
                scope.flipped=false;

                scope.flip = function () {
                    scope.flipped=!scope.flipped;
                };
                scope.flipFront = function(){
                    scope.flipped=false;
                }
            }
        };
    });
