angular
.module('busketItem')
    .directive('itemsInBusket',function(  ){
        return {
            restrict: 'A',
            templateUrl:'busket-items/busket-item.template.html',
            controller: ['busketItemService', 'phoneListService',function(busketItemService, phoneListService){
                var vm = this;

                vm.phoneItems = [];
                vm.items = [];

                vm.summ = 0;
                vm.quant = 0;

                phoneListService.get()
                    .then(function(res){
                        vm.phoneItems = res;
                        return res;
                    })
                    .then(function(){
                        return busketItemService.get();
                    })
                    .then(function(res){
                        angular.forEach(res, function(busketItemQty, busketItemId){
                            angular.forEach(vm.phoneItems, function(phoneItem){
                                if(parseInt(busketItemId) === phoneItem.cart_id){
                                    phoneItem.qty = busketItemQty;
                                    vm.items.push(phoneItem);

                                    vm.summ += phoneItem.price * phoneItem.qty;
                                    vm.quant += phoneItem.qty;
                                    console.log(phoneItem.qty);
                                }
                            });
                        });
                    });
            }],
            controllerAs: 'busket',
            link: function(scope, element, attr){

            }

        }

    });
