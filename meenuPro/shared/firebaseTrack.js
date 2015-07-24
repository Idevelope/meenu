/**
 * Created by s.priy on 7/24/2015.
 */
app.factory('trackNodesFactory',[
    'projectFactory',

    function(projectFactory){

        var init = function(){
            projectFactory.trackGuestNode();

        };
        return init;
    }]);
