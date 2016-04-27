public with sharing class MassLeadCreatorController {
    @RemoteAction
    public static List<Lead> insertLeads (List<Lead> toInsert) {
        insert toInsert;
        return toInsert;
    }
}