(function() {
    'use strict';

    angular
        .module('cv')
        .factory('interceptorFactory', interceptorFactory);
    
    interceptorFactory.$inject = ['$q', '$injector'];

    function interceptorFactory($q, $injector) {
        var service = {
            responseError: responseError
        };

        return service;

        function responseError(rejection) {

            if (rejection.config.retry) {
                rejection.config.retry++;
            } else {
                rejection.config.retry = 1;
            }

            if (rejection.config.retry < 10) {
                return $injector.get('$http')(rejection.config);
            } else {
                return $q.reject(rejection);
            }

        }

    }

    angular
        .module('cv')
        .config(config);

    function config($httpProvider) {
        $httpProvider.interceptors.push('interceptorFactory');
    }

}());

