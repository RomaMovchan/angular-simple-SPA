angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['phoneListService', function PhoneListController(phoneListService) {
            var vm = this;
            vm.orderProp = 'category';
            vm.phones = [];
            phoneListService.get()
                .then(function(res){
                    vm.phones = res;
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