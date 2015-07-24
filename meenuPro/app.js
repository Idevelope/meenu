/**
 * Created by sheel on 16/7/15.
 */

var app = angular.module('app', [
        'ngRoute',
        //'ngTouch',
        'firebase',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.rowEdit',
        'ui.grid.cellNav',
        //'ui.grid.resizeColumns',
        //'ui.grid.selection',
        //'ui.grid.exporter',
        //'ui.grid.importer'
    ]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'component/view/login.html',
                controller: 'LoginController'
            }).
            when('/excel', {
                templateUrl: 'component/view/excel.html',
                controller: 'ExcelController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);
//    .run( function($rootScope, $location) {
//
//        // register listener to watch route changes
//        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
//            if ( $rootScope.loggedUser == null ) {
//                // no logged user, we should be going to #login
//                if ( next.templateUrl == "partials/login.html" ) {
//                    // already going to #login, no redirect needed
//                } else {
//                    // not going to #login, we should redirect now
//                    $location.path( "/login" );
//                }
//            }
//        });
//    });

//    .when('/private/anotherpage', {
//        templateUrl:"another-private.html",
//        controller: AnotherPriveController,
//        resolve: {
//            factory: checkRouting
//        }
//    })
//    .otherwise({ redirectTo: '/' });
//}]);

app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://simpleex.firebaseio.com");
        return $firebaseAuth(ref);
    }
]);
//
//var checkRouting= function ($q, $rootScope, $location) {
//    if ($rootScope.userProfile) {
//        return true;
//    } else {
//        var deferred = $q.defer();
//        $http.post("/loadUserProfile", { userToken: "blah" })
//            .success(function (response) {
//                $rootScope.userProfile = response.userProfile;
//                deferred.resolve(true);
//            })
//            .error(function () {
//                deferred.reject();
//                $location.path("/");
//            });
//        return deferred.promise;
//    }
//};
//    .config(['depProvider', function(depProvider) {
//        // ...
//    }])
//    .run(['depService', function(depService) {
//        // ...
//    }])

