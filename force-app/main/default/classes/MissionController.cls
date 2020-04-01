public with sharing class MissionController {
    
    // Finds the very first mission with this status
    // @Param a status string
    @AuraEnabled
    public static Mission__c searchFirstMissionByStatus(String missionStatus) {
        Mission__c firstMission = [SELECT id, name, Status__c, Assigned_Superhuman__c FROM Mission__c WHERE Status__c = :missionStatus LIMIT 1];
        return firstMission;
    }
}
