/**
 * Created by Roman.Movchan on 06.02.2017.
 */

angular.module('phonecatApp', [
    'ngRoute',
    'phoneList',
    'phoneDetail',
    'busketItem'
]);


angular.module('phonecatApp')
    .controller('phonecatAppController', [function(){
        var vm = this;

        vm.showBusket = false;
    }]);

