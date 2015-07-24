/**
 * Created by s.priy on 7/24/2015.
 */
app.factory('trackNodesFactory',[
    'guestFactory',

    function(guestFactory){

        var init = function(){
            guestFactory.trackGuestNode();

        };
        return init;
    }]);
