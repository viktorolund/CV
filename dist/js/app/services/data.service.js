(function() {
    'use strict';

    angular
        .module('cv')
        .factory('dataFactory', dataFactory);
    
    dataFactory.$inject = ['$http'];

    function dataFactory($http) {
        var service = {
            fetchCareer: fetchCareer
        };

        return service;

        /**
         *  fetch career data
         *  @param {callback} careerCallback is the callback to retrieve careerdata
         */
        function fetchCareer(careerCallback) {
            $http({
                method: 'GET',
                url: 'api/career',
                data: '',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function successCallback(response) {

                if (careerCallback && typeof careerCallback === 'function') {
                    careerCallback(response.data);
                }

            }, function errorCallback() {

            });
        }

    }

}());
