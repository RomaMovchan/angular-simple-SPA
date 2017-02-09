'use strict';

angular.module('phonecatApp', [
    'ngRoute',
    'phoneList',
    'phoneDetail',
    'busketItem'
]);


angular.module('phonecatApp')
    .controller('phonecatAppController', [function(){
        let vm = this;

        vm.showBusket = false;
    }]);

