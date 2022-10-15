import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitTMS(){
        this.accessUrl('https://tms.imerit-playground.io');
    }
}

export class RobotEyes extends BaseEyes{
    valaditingTitle(){
        this.seesPathNameInUrl("/requirements")

    }
    requirments(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-1g4k6gi']", "Requirements")
    }
    selectingOpportunity(){
       this.seesDomVisibleWithIndex("[row-index='0']",1)
    }
    searchingOpportunity(){
        this.seesDomEnabled("[placeholder='Search Requirements']")
    }
    sortByRequierments(){
        this.seesDomVisibleWithIndex("[class='ag-header-cell-text']",0)
    }
    sortByResources(){
        this.seesDomVisibleWithIndex("[class='ag-header-cell-text']",2)
    }
    sortByRequistionDate(){
        this.seesDomVisibleWithIndex("[class='ag-header-cell-text']",3)
    }
    sortByBlockBy(){
        this.seesDomVisibleWithIndex("[class='ag-header-cell-text']",4)
    }
    sortByProjectStartDate(){
        this.seesDomVisibleWithIndex("[class='ag-header-cell-text']",7)
    }
    sortByBlockPercent(){
        this.seesDomVisibleWithIndex("[class='ag-header-cell-text']",8)
    }
    newOpportunities(){
      this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-1g4k6gi']","New")
    }
    pendingOpportunities(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-1g4k6gi']","Pending")
    }
    overdueOpportunities(){

      this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-1g4k6gi']","Overdue")
        
    }
    completedOpportunities(){

      this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-1g4k6gi']","Completed")
        
    }
    allOpportunities(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-1g4k6gi']","All")

    }
    noOfRequierments(){

    }
    pagination(){

    }
    listOfRequierements(){
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Technician-CV")
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Technician-NLP")
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Finance")
    }
    ellipsIcon(){
        this.seesDomVisibleWithIndex("[id='basic-button']",0)
    }
    requestResource(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-dkngov']","Request Resource")
    }
    details(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-dkngov']","Details")

    }
    download(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-dkngov']","Download")
    }
    firstRowEllipsMenu(){
        this.seesDomVisibleWithIndex("[data-testid='ellipsisMenu']",1)
    }
    secondRowEllipsMenu(){
        this.seesDomVisibleWithIndex("[data-testid='ellipsisMenu']",2)
    }
    thirdRowEllipsMenu(){
        this.seesDomVisibleWithIndex("[data-testid='ellipsisMenu']",3)
    }
    edit(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-dkngov']","Edit")
    }
    activity(){

        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-dkngov']","Activity")
    }
    delet(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-body2 css-dkngov']","Delete")
    }
    blockedState(){
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Neil Murray")
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Sammy Harris")
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Russell Pagac")
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Nicole Senger PhD")
    }
    emptyState(){
        this.seesDomContainText("[class='MuiTypography-root MuiTypography-caption2 css-508kwk']","Looks like there are no partial matches blocked.")
    }
    accordion(){
        this.seesDomContainText("[class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButtonBase-root jss25 jss19 jss21 css-gh0kul']","Block")
    }
    role(){
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value']","Technician-CV")
    }
    skillMatch(){
        this.seesDomContainText("[class='ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-right-aligned-cell ag-cell-value']","100%")
    }
    blockResource(){
        this.seesDomVisibleWithIndex("[class='MuiTypography-root MuiTypography-button1 css-10xd7a7']",1)
    }
    selectResource(){
        this.seesDomVisible("[id='ag-128-input']")
    }

    
}

export class RobotHands extends BaseHands{

    requirments(){
        this.clickOnText("Requirements")
    }
    selectingOpportunity(){
        this.ClickOnChildDomElement("[row-id='0']",1)
        // this.navigation(-1)
    }
    searchingOpportunity(){
        this.typeTextonDom("placeholder","Search Requirements","Kitware")
        this.ClickOnChildDomElement("[row-id='0']",1)
        this.navigation(-1)
    }
    sortByRequierments(){
        this.ClickOnChildDomElement("[class='ag-header-cell-text']",0)
    }
    sortByResources(){
        this.ClickOnChildDomElement("[class='ag-header-cell-text']",2)
    }
    sortByRequistionDate(){
        this.ClickOnChildDomElement("[class='ag-header-cell-text']",3)
    }
    sortByBlockBy(){
        this.ClickOnChildDomElement("[class='ag-header-cell-text']",4)
    }
    sortByProjectStartDate(){
        this.ClickOnChildDomElement("[class='ag-header-cell-text']",7)
    }
    sortByBlockPercent(){
        this.ClickOnChildDomElement("[class='ag-header-cell-text']",8)
    }
    newOpportunities(){
        this.clickOnText("New")
    }
    pendingOpportunities(){
        this.clickOnText("Pending")
    }
    overdueOpportunities(){
        this.clickOnText("Overdue")
    
    }
    completedOpportunities(){
        this.clickOnText("Completed")

    }
    allOpportunities(){

        this.clickOnText("All")

    }
    noOfRequierments(){

    }
    pagination(){

    }
    listOfRequierements(){
        this.clickOnText("Technician-CV")
    }
    ellipsIcon(){
        this.ClickOnChildDomElement("[id='basic-button']",0)
    }
    requestResource(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 css-dkngov']",0)
    }
    details(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 css-dkngov']",1)

    }
    download(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 css-dkngov']",2)
    }
    exit() {
        this.esc()
    }
    firstRowEllipsMenu(){
        this.ClickOnChildDomElement("[data-testid='ellipsisMenu']",1)
    }
    secondRowEllipsMenu(){
        this.ClickOnChildDomElement("[data-testid='ellipsisMenu']",2)
    }
    thirdRowEllipsMenu(){
        this.ClickOnChildDomElement("[data-testid='ellipsisMenu']",3)
    }
    edit(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 css-dkngov']",0)
    }
    activity(){

        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 css-dkngov']",1)
    }
    delet(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 css-dkngov']",2)
    }
    resources(){

    }
    accordion(){
        this.ClickOnChildDomElement("[class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButtonBase-root jss25 jss19 jss21 css-gh0kul']",0)
    }
    selectResource(){
        this.clickOnDomElement("[id='ag-128-input']")
    }
    blockResource(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-button1 css-10xd7a7']",1)
    }
    requestHire(){
        this.clickOnDomElement("[class='MuiTypography-root MuiTypography-button1 css-10xd7a7']")
    }
    
    goBack(){
        this.navigation(-1)
    }
    hold(){
        this.wait(1000)
    }
}