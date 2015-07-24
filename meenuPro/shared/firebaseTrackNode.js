/**
 * Created by s.priy on 7/24/2015.
 */
app.factory('guestFactory', [
    'main',
    'utils',
    'sqLiteModel',
    function(main, utils, sqLiteModel){

        var rootNode = 'https://shining-torch-1529.firebaseio.com/restaurants/' + main.restaurant_id;
        var locallyAddedObjects = {};
        var onCompletion = function(error){
            if(error){
                console.log("error" + error);
            }else{

                console.log("data saveed Succcesfully!!!" + error);
            }
        };

        var initialize = function(){
            var guestNode = new Firebase(rootNode).child("guest");
            guestNode.setPriority(2);
            return guestNode;
        };

        var trackNode = function(){
            var ref = this.init();
            if(localStorage.getItem("lastUpdated")){
                var updatedTime = localStorage.getItem("lastUpdated");
                ref.orderByChild("fbLastUpdatedTime").startAt(Number(updatedTime)).on("child_added", function(snapshot){
                    locallyAddedObjects[snapshot.key()] ? false : guestExecution(snapshot);
                });
                ref.orderByChild("fbLastUpdatedTime").startAt(Number(updatedTime)).on("child_changed", function(snapshot){
                    locallyAddedObjects[snapshot.key()] ? delete locallyAddedObjects[snapshot.key()] : guestExecution(snapshot);
                });
            } else {
                ref.on("child_added", function(snapshot){
                    locallyAddedObjects[snapshot.key()] ? false : guestExecution(snapshot);
                });
                ref.on("child_changed", function(snapshot){
                    locallyAddedObjects[snapshot.key()] ? delete locallyAddedObjects[snapshot.key()] : guestExecution(snapshot);
                });
            }
        };

        var guestExecution = function(snapshot) {
            var guest = snapshot.val();
           // var guestResponse = sqLiteModel.guestValidator(guest);
            console.log("child_added/updated-guest" + JSON.stringify(guestResponse));


        };

        var createGuestTag = function(guestGuid, tagGuid){
            return angular.extend(this, {
                guest_guid : guestGuid,
                tag_guid : tagGuid,
                created_time : main.getDateAsLong(),
                updated_time : main.getDateAsLong(),
                created_by : "Ankit",
                updated_by : "Vamshi"
            })
        };


        var addAsChild = function(id, childObject){
            var ref = this.init();
            ref.child(id).set(childObject, this.onCompletion);
            locallyAddedObjects[id] = id;
        }

        var updateChild = function(id, childObject){
            var ref = this.init();
            console.log("updated");
            ref.child(id).update(childObject, this.onCompletion);
        }

        var guestFactory = {
            init: initialize,
            trackGuestNode: trackNode,
            addGuest: addAsChild,
            updateGuest: updateChild,
            onCompletion: onCompletion,
        }

        return guestFactory;

    }]);
