(function(){
    var SFDCCtrl = typeof MyNamespace === undefined ? MyNamespace.MassLeadCreatorController : MassLeadCreatorController;
    window.RemoteActions = window.RemoteActions || {};

    window.RemoteActions.insertLeads = SFDCCtrl.insertLeads;
}());