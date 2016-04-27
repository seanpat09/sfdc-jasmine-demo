describe("Mass Lead Input", function(){
    'use strict'
    beforeEach(function(){
        loadFixtures('MassLeadInput.html');
    });

    describe("Inputting leads", function(){
        it("should allow you to add rows", function(){
            $('#addRow').trigger("click");
            expect($('.newLead').length).toEqual(2);
        });

        it("should allow you to delete rows", function(){
            $('.removeRow').click();
            expect($('.newLead').length).toEqual(0);
        });
    });

    describe("Saving leads", function(){
        describe("Success", function(){
            it("should display successfully created leads", function(){
                window.RemoteActions.insertLeadsIsSuccess = true;
                $('#save').click();
                expect($('#errors').children().length).toEqual(0);
                expect($('.insertedLeads .insertedLead').length).toEqual(3);
                expect($('.newLead').length).toEqual(0);
            });
        })

        describe("Failure", function(){
            it("should display an error if it does not save", function(){
                window.RemoteActions.insertLeadsIsSuccess = false;
                window.MassLeadInput.saveLeads();
                expect($('#errors').children().length).toEqual(1);
            });     
        }) 
    });
});