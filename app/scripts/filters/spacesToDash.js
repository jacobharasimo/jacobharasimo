'use strict';

angular.module('jacobharasimoApp')
  .filter('spacesToDash', function () {
    return function (input) {
      return input.replace(/ /g,"_");
    };
  });
