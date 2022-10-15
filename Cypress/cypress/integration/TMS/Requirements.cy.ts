/// <reference types="cypress" />
import { RobotEyes, RobotHands, Dependencies } from '../../robots/Requirements/Requirements';

context("Search Test", () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();

    describe('TMS Requierments Page', ()=>{

        it("Select an opportunity", function()  {
            dependencies.visitTMS();
            robotEyes.valaditingTitle();
            robotHands.requirments()
            robotEyes.requirments()
            robotHands.searchingOpportunity()
            robotEyes.searchingOpportunity()
            robotHands.sortByRequierments()
            robotEyes.sortByRequierments()
            robotHands.sortByResources()
            robotEyes.sortByResources()
            robotHands.sortByRequistionDate()
            robotEyes.sortByRequistionDate()
            robotHands.sortByBlockBy()
            robotEyes.sortByBlockBy()
            robotHands.sortByProjectStartDate()
            robotEyes.sortByProjectStartDate()
            robotHands.sortByBlockPercent()
            robotEyes.sortByBlockPercent()
            robotHands.newOpportunities()
            robotEyes.newOpportunities()
            robotHands.pendingOpportunities()
            robotEyes.pendingOpportunities()
            robotHands.overdueOpportunities()
            robotEyes.overdueOpportunities()
            robotHands.completedOpportunities()
            robotEyes.completedOpportunities()
            robotHands.allOpportunities()
            robotEyes.allOpportunities()
            robotHands.noOfRequierments()
            robotEyes.noOfRequierments()
            robotHands.pagination()
            robotEyes.pagination()
        });
        it("Details of Opportunity", function(){
            dependencies.visitTMS();
            robotHands.selectingOpportunity()
            robotEyes.selectingOpportunity()
            robotEyes.listOfRequierements()
            robotHands.listOfRequierements()
            robotHands.goBack()
            robotHands.ellipsIcon()
            robotEyes.ellipsIcon()
            robotHands.requestResource()
            robotEyes.requestResource()
            robotHands.details()
            robotEyes.details()
            robotHands.download()
            robotEyes.download()
            robotHands.exit()
            robotHands.hold()
            robotHands.firstRowEllipsMenu()
            robotHands.edit()
            robotEyes.edit()
            robotHands.activity()
            robotEyes.activity()
            robotHands.delet()
            robotEyes.delet()
            robotHands.exit()
            robotHands.secondRowEllipsMenu()
            robotHands.edit()   
            robotEyes.edit()   
            robotHands.activity()   
            robotEyes.activity()   
            robotHands.delet()
            robotEyes.delet()
            robotHands.exit()      
            robotHands.thirdRowEllipsMenu()
            robotHands.edit()
            robotEyes.edit()
            robotHands.activity()
            robotEyes.activity()
            robotHands.delet()
            robotEyes.delet()
            robotHands.exit()

        })
        it("Summary of allocated resources", ()=>{
            dependencies.visitTMS();
            robotEyes.valaditingTitle();
            robotHands.selectingOpportunity()
            robotEyes.selectingOpportunity()
            robotEyes.listOfRequierements()
            robotHands.listOfRequierements()
            robotEyes.blockedState()
            robotEyes.emptyState()
            robotEyes.accordion()
            robotHands.accordion()
            robotEyes.role()
            robotEyes.skillMatch()
            robotHands.selectResource()
            robotHands.blockResource()
            robotHands.goBack()
            robotHands.requestHire()
        })
    });
});