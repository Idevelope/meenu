/**
 * Created by s.priy on 7/24/2015.
 */
app.factory('projectFactory', [

    function(){
        var rootNode = 'https://simpleex.firebaseio.com/';
        var locallyAddedObjects = {};
        var onCompletion = function(error){
            if(error){
                console.log("error" + error);
            }else{

                console.log("data saveed Succcesfully!!!" + error);
            }
        };

        var initialize = function(){
            var guestNode = new Firebase(rootNode).child("projects");
            guestNode.setPriority(2);
            return guestNode;
        };

        var trackNode = function(){
            var ref = this.init();
                alert("tracknode");
                ref.on("child_added", function(snapshot){
                    locallyAddedObjects[snapshot.key()] ? false : guestExecution(snapshot);
                });
                ref.on("child_changed", function(snapshot){
                    locallyAddedObjects[snapshot.key()] ? delete locallyAddedObjects[snapshot.key()] : guestExecution(snapshot);
                });
        };

        var guestExecution = function(snapshot) {
            var guest = snapshot.val();
           // var guestResponse = sqLiteModel.guestValidator(guest);
            console.log("child_added/updated-guest" + JSON.stringify(guest));
        };

        var addAsChild = function(id, childObject){
            var ref = this.init();
            ref.child(id).set(childObject, this.onCompletion);
            locallyAddedObjects[id] = id;
        };

        var updateChild = function(id, childObject){
            var ref = this.init();
            console.log("updated");
            ref.child(id).update(childObject, this.onCompletion);
        };

        var guestFactory = {
            init: initialize,
            trackGuestNode: trackNode,
            addGuest: addAsChild,
            updateGuest: updateChild,
            onCompletion: onCompletion
        };

        return guestFactory;

    }]);
