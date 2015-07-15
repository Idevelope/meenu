/**
 * Created by sheel on 16/7/15.
 */
app.controller('LoginController', [
    '$scope',
    function($scope) {
        $scope.login = {};
        $scope.submit= function(data){
            alert(data.password);// ...
        };
}]);
