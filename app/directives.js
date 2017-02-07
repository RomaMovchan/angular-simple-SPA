
angular.
module('phoneList')
    .directive('addToCart',function(  ){
        return {
            restrict: 'A',
            link: function(scope, element, attr){


                element.on('click', function (ev) {
                    if(scope.phone.instock > 0) {

                        console.log(scope.phone.instock);
                        scope.phone.instock -= 1;

                        var obj = localStorage.cartid ? JSON.parse(localStorage.cartid) : [];
                        obj.push(scope.phone.cart_id);
                        //console.log(obj);
                        localStorage.cartid = JSON.stringify(obj);
                    } else {
                        scope.isDisabled = false;
                    }
                    scope.$digest();
                });

            }

        }

    });

angular.
module('phoneList')
    .directive('itemsInBusket',function(  ){
        return {
            restrict: 'A',
            templateUrl:'templates/cart.tmpl.html',
            link: function(scope, element, attr){
                console.log(scope);

            }

        }

    });


