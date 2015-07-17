/**
 * Created by sheel on 16/7/15.
 */

app.factory('userService', function(){
    var rootRef = new Firebase('https://crackling-fire-6782.firebaseio.com/');
    var user = rootRef.child('users');
    var postsRef = ref.child("posts");
    postsRef.push({
        author: "gracehop",
        title: "Announcing COBOL, a New Programming Language"
    });
    postsRef.push({
        author: "alanisawesome",
        title: "The Turing Machine"
    });


    return fac;

});
