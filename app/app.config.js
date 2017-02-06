/**
 * Created by Roman.Movchan on 06.02.2017.
 */

angular.
module('phonecatApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/phones', {
                template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/phones');
        }
]);
