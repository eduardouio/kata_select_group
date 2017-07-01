'use strict';

angular.module('App')
.controller('Main', function ($scope) {

  $scope.controller_loaded = 'Main controller loaded!';

  $scope.sum = function(numa, numb){
    //console.log('[Deb] Hola');
    var sum = (numa + numb );
    return sum;

};

  $scope.validateForm =  function(employedEst, employedLon) {
    //para pareja de usuarios
    if(employedEst.length > 0){
      $scope.result = [];
      if (employedEst[0] < employedLon[0]){
        $scope.result.push(employedEst[0]);
      }else{
        $scope.result.push(employedLon[0]);
      }
    }

    //para dos empleados
    //expect(scope.validateForm([1009, 1017], [2011,2011])).toEqual([2011]);
    if(employedEst.length > 1){
      //Personas repetidas en estocolmo
      var repeatedEst = [];
      var repeatedLon = [];
      $scope.result = [];
         for (var i = 0; i < employedEst.length; i++) {
            for (var emp = 0; emp < employedEst.length; emp++) {
              if (employedEst[i] === employedEst[emp]){
                repeatedEst.push(employedEst[emp]);
              }
            }
         }

         //empleador Londres
         for (var i = 0; i < employedLon.length; i++) {
           for (var emp = 0; emp < employedLon.length; emp++) {
             if (employedLon[i] === employedLon[emp]){
               repeatedLon.push(employedLon(emp));
             }
           }
         }

    }


    console.log('[#30] ' + $scope.result);
    return $scope.result;

  };
});
