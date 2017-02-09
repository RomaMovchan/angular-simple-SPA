'use strict';
angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['phoneListService', function PhoneListController(phoneListService) {
            let vm = this;
            vm.orderProp = 'category';
            vm.phones = [];
            phoneListService.get()
                .then(res => vm.phones = res);
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
                .then(response => $q.when(response.data));
        }
    }]);
