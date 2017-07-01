'use strict';

describe('Controller: Main', function () {

  beforeEach(module('App'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('Main', { $scope: scope });
  }));

  /**
   * TDD para funcion suma
   */
  describe('On instance', function(){
    it('should set "controller_loaded" variable in scope', function() {
      expect(scope.controller_loaded).toContain('loaded');
    });

    it('suma de dos numeros', function(){
      expect(scope.sum(2, 2)).toEqual(4);
      expect(scope.sum(4, 19)).toEqual(23);
    });

    /**
     * selecion 2 usuarios
     */
    it('registro de una parejas', function () {
      expect(scope.validateForm([2001], [1003])).toEqual([1003]);
    });

    /**
     * Selecion para mas de 2 parejas
     */
    it('registro de varia parejas', function () {
      expect(scope.validateForm([1009, 1017], [2011,2011])).toEqual([2011]);
    });

    it('registro de varia parejas', function () {
      expect(scope.validateForm([1009, 1017,1016,1432], [2005,2005,2005,2005])).toEqual([2005]);
    });
  });

});
