/**
 * Created by sheel on 16/7/15.
 */

app.factory('main', function(){
    var rootRef = new Firebase('https://simpleex.firebaseio.com/');
    var projectList =[];

    var mainModel = {
        root:rootRef,
        projects:projectList
    };

    return mainModel;

});
