/**
 * Created by Roman.Movchan on 06.02.2017.
 */

angular.module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$scope', '$http', '$rootScope', 'phoneListService', function PhoneListController($scope, $http, $rootScope, phoneListService) {
            var self = this;
            self.orderProp = 'category';
            self.phones = [];
            phoneListService.get()
                .then(function(res){
                    self.phones = res;
                });
        }]
    });
angular
    .module('phoneList')
    .service('phoneListService', ['$http', '$q', function ($http, $q) {
        return {
            get: $$get
        };

        function $$get() {
            return $http.get('phones/phones.json')
                .then(function (response) {
                    return $q.when(response.data);
                });
        }
    }]);