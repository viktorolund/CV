(function() {
    'use strict';

    angular
        .module('cv')
        .directive('pageFooter', pageFooter);

    function pageFooter() {
        var directive = {
            restrict: 'A',
            scope: true,
            templateUrl: 'partials/footer.html',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

}());
