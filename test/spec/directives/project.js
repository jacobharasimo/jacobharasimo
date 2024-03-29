'use strict';

describe('Directive: project', function () {

  // load the directive's module
  beforeEach(module('jacobharasimoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project></project>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the project directive');
  }));
});
