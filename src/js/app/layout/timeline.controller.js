(function() {
    'use strict';

    angular
        .module('cv')
        .controller('timelineController', timelineController);
    
    timelineController.$inject = ['$scope', 'dataFactory'];

    function timelineController($scope, dataFactory) {

        $scope.events = [
            {
                side: 'left',
                badgeClass: 'info',
                title: 'Utbildning Umeå Universitet <small class="text-muted">Högskoleingenjörsprogrammet i Elektronik och Datorteknik</small>',
                when: '2011-2014',
                contentHtml: 'Kurser som behandlat områden i webb som C#, PHP, MySQL, JavaScript, html, CSS och programspråk som C och Python'
            }
        ];

        function setCareer(createdEvent) {
             $scope.events.push(createdEvent);
        }

        function addCareerEvent(careerData) {
            var toggleConfig = false,
                eventConfig = {};

            if (careerData && careerData.career.viktor.jobs.length > 0) {

                careerData.career.viktor.jobs.map(function(job) {
                    eventConfig = {
                        side: 'left',
                        badgeClass: 'info',
                        title: undefined,
                        when: undefined,
                        contentHtml: undefined
                    };

                    if (!toggleConfig) {
                        eventConfig.side = 'right';
                    }

                    Object.keys(job).map(function(src) {
                        eventConfig.title = src;
                        eventConfig.when = job[src].time;
                        eventConfig.contentHtml = job[src].description;
                    });

                    setCareer(eventConfig);

                    toggleConfig = !toggleConfig;
                });

            }

        } 

        function myCareer(careerData) {
            addCareerEvent(careerData);
        }

        function initCareer(careerCB) {
            return dataFactory.fetchCareer(careerCB);
        }

        initCareer(myCareer);

    }

}());
