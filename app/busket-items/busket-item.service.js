'use strict';
angular
    .module('busketItem')
    .service('busketItemService', ['$q',function($q){
        let cart_storage_id = 'cart';

        return {
            get: $$get,
            set: $$set
        };

        function $$get(){
            if(localStorage.getItem(cart_storage_id) === null){
                localStorage.setItem(cart_storage_id, JSON.stringify({}));
            }

            return $q.when(JSON.parse(localStorage.getItem(cart_storage_id)));
        }

        function $$set(cart_id){
            if(localStorage.getItem(cart_storage_id) === null){
                localStorage.setItem(cart_storage_id, JSON.stringify({}));
            }

            let cart = JSON.parse(localStorage.getItem(cart_storage_id));

            if(cart.hasOwnProperty(cart_id)){
                cart[cart_id] += 1;
            }
            else{
                cart[cart_id] = 1;
            }

            localStorage.setItem(cart_storage_id, JSON.stringify(cart));
        }
    }]);