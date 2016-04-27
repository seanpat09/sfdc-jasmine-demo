(function($,w){
    'use strict';
    w.MassLeadInput = w.MassLeadInput || {};
    
    $(document).ready( function(){
        $('body').on("click", "#addRow", function(e){
            window.MassLeadInput.addRow();
        });
        $('body').on("click", ".removeRow", function(e){
            window.MassLeadInput.removeRow(e);
        });
        $('body').on("click", "#save", function(e){
            window.MassLeadInput.saveLeads();
        });
    });

    w.MassLeadInput.addRow = function(){
        $('.newLeads').append(
        '<div class="newLead row">'
            + '<div class="form-group">'
                + '<label for="fname">First Name</label>'
                + '<input class="form-control" name="fname"></input>'
            + '</div>'
            + '<div class="form-group">'
                + '<label for="fname">Last Name</label>'
                + '<input class="form-control" name="lname"></input>'
            + '</div>'
            + '<div class="form-group">'
                + '<label for="fname">Company</label>'
                + '<input class="form-control" name="company"></input>'
            + '</div>'
            + '<a href="javascript:void(0)" class="removeRow">Remove Row</a>'
        + '</div>'
        );
    };

    w.MassLeadInput.removeRow = function(e){
        $(e.currentTarget).parent().remove();
    };

    w.MassLeadInput.saveLeads = function(){
        var leadsToInsert = [];
        $('.newLeads .newLead').each( function(i,l){
            leadsToInsert.push(
                {
                    FirstName : $(l).find("input[name='fname']").val(),
                    LastName : $(l).find("input[name='lname']").val(),
                    Company : $(l).find("input[name='company']").val()
                }
            )
        });
        w.RemoteActions.insertLeads( leadsToInsert, function( result, event ){
            var i;
            if( event.status ){
                for( i = 0; i < result.length; i++ ){
                    $('.insertedLeads').append(
                        '<div class="insertedLead">'
                        +'<span>Id: '+result[i].Id+'</span>&nbsp;'
                        +'<span>Name: '+result[i].FirstName+' '+result[i].LastName+'</span>&nbsp;'
                        +'<span>Company: '+result[i].Company+'</span></div>'
                    );
                }
                $('.newLeads .newLead').remove();
            } else{
                $("#errors").append( "<span>"+ event.message +"</span>");
            }
        });
    };

}(jQuery,window));