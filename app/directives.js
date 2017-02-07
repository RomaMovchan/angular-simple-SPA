
angular.
module('phoneList')
    .directive('addToCart', ['busketItemService', function(busketItemService){
        return {
            restrict: 'A',
            link: function(scope, element, attr){

                element.on('click', function (ev) {
                    if(scope.phone.instock > 0) {

                        console.log(scope.phone.instock);
                        scope.phone.instock -= 1;

                        scope.$digest();

                        busketItemService.set(scope.phone.cart_id);
                    } else {
                        scope.isDisabled = false;
                    }

                });
            }

        }

    }]);