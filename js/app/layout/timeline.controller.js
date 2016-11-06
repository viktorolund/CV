(function() {
    'use strict';

    angular
        .module('cv')
        .controller('timelineController', timelineController);
    
    timelineController.$inject = ['$scope'];

    function timelineController($scope) {

        $scope.events = [
            {
                side: 'left',
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-check',
                title: 'Utbildning Umeå Universitet <small class="text-muted">Högskoleingenjörsprogrammet i Elektronik och Datorteknik</small>',
                when: '2011-2014',
                contentHtml: 'Kurser som behandlat områden i webb som C#, PHP, MySQL, JavaScript, html, CSS och programspråk som C och Python'
            },
            {
                side: 'right',
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-check',
                title: 'Telia',
                when: '2013-2015',
                contentHtml: 'Applikationsprojekt som berört PHP, MySQL, Java, XML, JavaScript, Highcharts, html och CSS'
            },
            {
                side: 'left',
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-check',
                title: 'Norrlands Universitetssjukhus',
                when: '2015-Pågående',
                contentHtml: 'Webbutvecklare i AngularJS, JavaScript ES5 och ES2015, JSON, Highcharts, Node.js, html, CSS, Bootstrap'
            }
        ];

    }

}());
