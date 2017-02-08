angular
.module('phoneDetail')
.component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
        function PhoneDetailController($http, $routeParams) {
            var vm = this;

            vm.setImage = function setImage(imageUrl) {
                vm.mainImageUrl = imageUrl;
            };

            $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
                vm.phone = response.data;
                vm.setImage(vm.phone.images[0]);
            });

        }
    ]
});