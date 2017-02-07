/**
 * Created by Roman.Movchan on 06.02.2017.
 */

angular.
    module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$scope', '$http', '$rootScope', function PhoneListController($scope, $http, $rootScope) {
                var self = this;
                 self.orderProp = 'category';

                $http.get('phones/phones.json').then(function(response) {
                    self.phones = response.data;
                });

                localStorage.clear();
                var cartId = [

                ];
                localStorage.cartid = JSON.stringify(cartId);


            }
        ]
});