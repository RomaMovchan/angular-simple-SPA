'use strict';
angular
.module('phoneDetail')
.component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
        function PhoneDetailController($http, $routeParams) {
            let vm = this;

            vm.setImage = function setImage(imageUrl) {
                vm.mainImageUrl = imageUrl;
            };

            $http.get('phones/' + $routeParams.phoneId + '.json').then(response => {
                vm.phone = response.data;
                vm.setImage(vm.phone.images[0]);
            });

        }
    ]
});