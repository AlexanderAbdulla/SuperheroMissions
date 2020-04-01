({
        doInit : function(component, event) {
            console.log('starting init');
            console.log("Mission Status:" + component.get("v.missionStatus"));
            // Search Missions that are v.missionStatus (grab the first)
            //searchFirstMissionByStatus
            var missionStatus = component.get("v.missionStatus");
            var action = component.get("c.searchFirstMissionByStatus");
            action.setParams({
                missionStatus : missionStatus
            });
            action.setCallback(this, function(a){
                console.log('doin the init');
                console.log(a.getReturnValue());
                component.set("v.firstMission", a.getReturnValue());
            });
            $A.enqueueAction(action);
        },
})
