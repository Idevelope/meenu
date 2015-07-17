/**
 * Created by sheel on 16/7/15.
 */
app.controller('LoginController', [
    '$scope',
    '$rootScope',
    '$location',
    function($scope,$rootScope,$location) {
        $scope.login = {};
        $scope.submit= function(data){
//            var ref = new Firebase("https://simpleex.firebaseio.com");
//            ref.createUser({
//                email    : data.username,
//                password : data.password
//            }, function(error, userData) {
//                if (error) {
//                    console.log("Error creating user:", error);
//                } else {
//                    console.log("Successfully created user account with uid:", userData.uid);
//                }
//            });

            var ref = new Firebase("https://simpleex.firebaseio.com");
            ref.authWithPassword({
                email    : data.username,
                password : data.password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    alert("logged in");
                    $location.path( "/excel" );
                    $rootScope.loggedUser = authData.password.email;
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        };
}]);
