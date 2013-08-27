'use strict';

angular.module('jacobharasimoApp')
  .factory('projects', function ($resource) {
      return $resource('/scripts/data/projects.json',{},{
          get:{method:'GET',isArray:true}
      });
  });
