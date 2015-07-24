/**
 * Created by sheel on 16/7/15.
 */
app.controller('LoginController', [
    '$scope',
    '$rootScope',
    '$location',
    'Auth',
    function($scope,$rootScope,$location, Auth) {
        $scope.login = {};
        $scope.auth = Auth;

        // any time auth status updates, add the user data to scope


        $scope.createUser = function() {
            $scope.message = null;
            $scope.error = null;

            Auth.$createUser({
                email: $scope.email,
                password: $scope.password
            }).then(function(userData) {
                $scope.message = "User created with uid: " + userData.uid;
            }).catch(function(error) {
                $scope.error = error;
            });
        };

        $scope.removeUser = function() {
            $scope.message = null;
            $scope.error = null;

            Auth.$removeUser({
                email: $scope.email,
                password: $scope.password
            }).then(function() {
                $scope.message = "User removed";
            }).catch(function(error) {
                $scope.error = error;
            });
        };
        $scope.submit= function(data){
            //if(!$rootScope.isLoggedIn){
            //    return;
            //}
            $scope.auth.$onAuth(function(authData) {
                $scope.authData = authData;
                $location.path( "/excel" );
                $rootScope.loggedUser = authData.password.email;
                $rootScope.isLoggedIn  = true;
                console.log("Authenticated successfully with payload:", authData);
                alert("auth factory");
            });

            //var ref = new Firebase("https://simpleex.firebaseio.com");
            //ref.authWithPassword({
            //    email    : data.username,
            //    password : data.password
            //}, function(error, authData) {
            //    if (error) {
            //        console.log("Login Failed!", error);
            //    } else {
            //
            //
            //        alert("logged in");
            //    }
            //});
        };
}]);
