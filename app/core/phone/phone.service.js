/**
 * Created by Roman.Movchan on 07.02.2017.
 */
angular.
module('core.phone').
factory('Phone', ['$resource',
    function($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }
]);