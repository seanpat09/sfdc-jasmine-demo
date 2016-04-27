(function(){
    'use strict';
    var payload;
    window.RemoteActions = window.RemoteActions || {};
    window.RemoteActions.insertLeadsIsSuccess = true;
    window.RemoteActions.insertLeads = function(params, callback){
        var event = {
            status : window.RemoteActions.insertLeadsIsSuccess,
            message : 'an error'
        }
        return callback(payload, event);

    }
    payload = [
        {
            Id : '00Q000000000001',
            FirstName : 'Bruce',
            LastName : 'Wayne',
            Company : 'Wayne Enterprises'
        },
        {
            Id : '00Q000000000001',
            FirstName : 'Clark',
            LastName : 'Kent',
            Company : 'Daily Planet'
        },
        {
            Id : '00Q000000000001',
            FirstName : 'Diana',
            LastName : 'Prince',
            Company : 'Themyscira'
        }
    ];
}());