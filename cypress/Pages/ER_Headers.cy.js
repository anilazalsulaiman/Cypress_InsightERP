import { locators } from "../Utils/locators.cy"
import { assertions } from "../Utils/assertions.cy"

class Headers{
    
    //MOUSE HOVER APPS
    mousehover_header_apps(){
        cy.mouseHoverAndClick(locators.headers.hover_apps)
    }

    //APPS-TIMESHEET
    header_apps_visible_timesheet(){
        cy.visibilityCheckXpath(locators.headers.click_apps_timesheet)
    }
    header_apps_click_timesheet(){
        cy.get(locators.headers.click_apps_timesheet).first().click();
        cy.wait(1000)
        cy.url().should('include','/timesheet')
        cy.xpath(assertions.headers.assert_TimesheetPage_title).should('have.text',"My TimeSheet")
    }

    //APPS-LEAVES
    mousehover_header_apps_Leaves(){
        cy.xpath(locators.headers.hover_apps_Leaves).trigger('mouseover').click();
    }
    header_apps_visible_Leaves(){
        cy.visibilityCheckXpath(locators.headers.hover_apps_Leaves)
    }
    header_apps_Leaves_click_ApplyLeaves(){
        cy.xpath(locators.headers.click_apps_Leaves_ApplyLeave).click();
        cy.url().should('include','/apply')
        cy.xpath(assertions.headers.assert_ApplyLeave_Page_title).should('have.text',"Leave Application")
    }
    header_apps_Leaves_click_MyLeaveHistory(){
        cy.xpath(locators.headers.click_apps_Leaves_MyLeaveHistory).click();
        cy.url().should('include','/leaves')
        cy.xpath(assertions.headers.assert_MyleaveHistory_Page_title).should('have.text',"My Leaves")
    }
    header_apps_Leaves_click_ForMyAproval(){
        cy.xpath(locators.headers.click_apps_Leaves_ForMyApproval).click();
        cy.visibilityCheckXpath(assertions.headers.assert_ForMyApproval_Page_title)
        cy.xpath(assertions.headers.assert_ForMyApproval_Page_title).should('have.text',"Leave Applications")
    }

    //APPS-GROUP CHANGE
    header_apps_click_groupchange(){
       cy.visibilityCheckXpath(locators.headers.click_apps_groupchange)
        cy.xpath(locators.headers.click_apps_groupchange).click();
        cy.url().should('include','/groupchange')
        cy.xpath(assertions.headers.assert_groupchange_Page_title).should('have.text',"Group Change Request")
    }

    //APPS-MY BILLS
    mousehover_header_apps_MyBills(){
        cy.xpath(locators.headers.hover_apps_mybills).trigger('mouseover').click();
    }
    header_apps_visible_MyBills(){
        cy.visibilityCheckXpath(locators.headers.hover_apps_mybills)
        cy.xpath(locators.headers.hover_apps_mybills).trigger('mouseover').click(); 
    }
    header_apps_bills_click_CreateNewRequest(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_CreateNewRequest)
        cy.xpath(locators.headers.click_apps_mybills_CreateNewRequest).click();
        cy.url().should('include','/createnew')
        cy.xpath(assertions.headers.assert_createNewRequest_Page_title).should('have.text',"Create Bill")
    }
    header_apps_bills_click_MyBillsHistory(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_MyBillsHistory)
        cy.xpath(locators.headers.click_apps_mybills_MyBillsHistory).click();
        cy.url().should('include','/billshistory')
        cy.xpath(assertions.headers.assert_MyBillsHistory_Page_title).should('have.text',"My Bills History")
    }
    header_apps_bills_click_Category(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_Category)
        cy.xpath(locators.headers.click_apps_mybills_Category).click();
        cy.url().should('include','/Reim/admin')
        cy.xpath(assertions.headers.assert_Category_Page_title).should('have.text',"Reimbursement Master")
    }
    header_apps_bills_click_DeptApproval(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_DeptApproval)
        cy.xpath(locators.headers.click_apps_mybills_DeptApproval).click();
        cy.url().should('include','/Deptapprove')
        cy.xpath(assertions.headers.assert_DeptApproval_Page_title).should('have.text',"DEPARTMENT APPROVALS")
    }
    header_apps_bills_click_DeptHistory(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_DeptHistory)
        cy.xpath(locators.headers.click_apps_mybills_DeptHistory).click();
        cy.url().should('include','/Depthistory')
        cy.xpath(assertions.headers.assert_DeptHistory_Page_title).should('have.text',"DEPARTMENT HISTORY")
    }
    header_apps_bills_click_FinApprovals(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_Finapproval)
        cy.xpath(locators.headers.click_apps_mybills_Finapproval).click();
        cy.url().should('include','/Finapproval')
        cy.xpath(assertions.headers.assert_Finapproval_Page_title).should('have.text',"FINANCE APPROVALS")
    }
    header_apps_bills_click_FinHistory(){
        cy.visibilityCheckXpath(locators.headers.click_apps_mybills_FinHistory)
        cy.xpath(locators.headers.click_apps_mybills_FinHistory).click();
        cy.url().should('include','/Financehistory')
        cy.xpath(assertions.headers.assert_FinHistory_Page_title).should('have.text',"FINANCE HISTORY")
    }

    //APPS-GOALS & REVIEWS
    mousehover_header_apps_GandR(){
        cy.xpath(locators.headers.hover_apps_GandR).trigger('mouseover').click();
    }
    header_apps_visible_GandR(){
        cy.visibilityCheckXpath(locators.headers.hover_apps_GandR)
        cy.xpath(locators.headers.hover_apps_GandR).trigger('mouseover').click(); 
    }
    header_apps_GandR_click_Initiation(){
        cy.visibilityCheckXpath(locators.headers.click_apps_GandR_initiation)
        cy.xpath(locators.headers.click_apps_GandR_initiation).click();
        cy.url().should('include','/initiate')
        cy.xpath(assertions.headers.assert_initiation_Page_title).should('have.text',"Initiate G&R")
    }
    header_apps_GandR_click_MyGoals(){
        cy.visibilityCheckXpath(locators.headers.click_apps_GandR_MyGoals)
        cy.xpath(locators.headers.click_apps_GandR_MyGoals).click();
        cy.url().should('include','/employee/mygoals/')
        cy.xpath(assertions.headers.assert_MyGoals_Page_title).should('have.text',"Current Year Goals")
    }

}
export default new Headers();