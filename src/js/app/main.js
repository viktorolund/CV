(function() {
    'use strict';

    angular.module('cv', [
        'ngSanitize',
        'angular-timeline'
    ]);

    angular
        .module('cv')
        .controller('mainController', mainController);
    
    mainController.$inject = ['$scope'];

    function mainController($scope) {

    }

}());
