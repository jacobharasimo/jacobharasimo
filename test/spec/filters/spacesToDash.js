'use strict';

describe('Filter: spacesToDash', function () {

  // load the filter's module
  beforeEach(module('jacobharasimoApp'));

  // initialize a new instance of the filter before each test
  var spacesToDash;
  beforeEach(inject(function ($filter) {
    spacesToDash = $filter('spacesToDash');
  }));

  it('should return the input prefixed with "spacesToDash filter:"', function () {
    var text = 'angularjs';
    expect(spacesToDash(text)).toBe('spacesToDash filter: ' + text);
  });

});
