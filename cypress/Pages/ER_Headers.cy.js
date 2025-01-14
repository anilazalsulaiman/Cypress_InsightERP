class Headers{

    hover_apps=":nth-child(2) > :nth-child(1) > .css-mukiy0 > .css-1y19ivf"

    //timesheet
    click_apps_timesheet="a[href='/apps/timesheet/']"
    assert_TimesheetPage_title="//h5[normalize-space()='My TimeSheet']"

    //leaves
    hover_apps_Leaves="(//p[normalize-space()='Leaves'])[1]"
    click_apps_Leaves_ApplyLeave="//a[@href='/apps/leaves/apply/']"
        assert_ApplyLeave_Page_title="//h6[normalize-space()='Leave Application']"
    click_apps_Leaves_MyLeaveHistory="//a[@href='/apps/leaves/']"
        assert_MyleaveHistory_Page_title="//h5[normalize-space()='My Leaves']"
    click_apps_Leaves_ForMyApproval="(//a[@href='/apps/leaves/requests/'])[1]"
        assert_ForMyApproval_Page_title="//h5[normalize-space()='Leave Applications']"

    //group change
    click_apps_groupchange="//a[@href='/apps/groupchange/']"
        assert_groupchange_Page_title="//button[normalize-space()='Group Change Request']"

    //mybills
    hover_apps_mybills="(//p[normalize-space()='My Bills'])[1]"
    click_apps_mybills_CreateNewRequest="//a[@href='/apps/Reim/createnew/']"
        assert_createNewRequest_Page_title="//span[normalize-space()='Create Bill']"
    click_apps_mybills_MyBillsHistory="//a[@href='/apps/Reim/createnew/billshistory/']"
        assert_MyBillsHistory_Page_title="//span[normalize-space()='My Bills History']"
    click_apps_mybills_Category="//a[@href='/apps/Reim/admin/']"
        assert_Category_Page_title="//span[normalize-space()='Reimbursement Master']"
    click_apps_mybills_DeptApproval="//a[@href='/apps/Reim/deptapprove/Deptapprove/']"
        assert_DeptApproval_Page_title="//span[normalize-space()='DEPARTMENT APPROVALS']"
    click_apps_mybills_DeptHistory="//a[@href='/apps/Reim/deptapprove/Depthistory/']"
        assert_DeptHistory_Page_title="//span[normalize-space()='DEPARTMENT HISTORY']"       
    click_apps_mybills_Finapproval="//a[@href='/apps/Reim/finapproval/Finapproval/']"
        assert_Finapproval_Page_title="//span[normalize-space()='FINANCE APPROVALS']"
    click_apps_mybills_FinHistory="//a[@href='/apps/Reim/finapproval/Financehistory/']"
        assert_FinHistory_Page_title="//span[normalize-space()='FINANCE HISTORY']"    
    
    //MOUSE HOVER APPS
    mousehover_header_apps(){
        cy.get(this.hover_apps).trigger('mouseover').click();
    }

    //APPS-TIMESHEET
    header_apps_visible_timesheet(){
        cy.get(this.click_apps_timesheet).should('be.visible') // mouse hovered value shuld be visible
    }
    header_apps_click_timesheet(){
        cy.get(this.click_apps_timesheet).first().click();
        cy.wait(1000)
        cy.url().should('include','/timesheet')
        cy.xpath(this.assert_TimesheetPage_title).should('have.text',"My TimeSheet")
    }

    //APPS-LEAVES
    mousehover_header_apps_Leaves(){
        cy.xpath(this.hover_apps_Leaves).trigger('mouseover').click();
    }
    header_apps_visible_Leaves(){
        cy.xpath(this.hover_apps_Leaves).should('be.visible')
    }
    header_apps_Leaves_click_ApplyLeaves(){
        cy.xpath(this.click_apps_Leaves_ApplyLeave).click();
        cy.url().should('include','/apply')
        cy.xpath(this.assert_ApplyLeave_Page_title).should('have.text',"Leave Application")
    }
    header_apps_Leaves_click_MyLeaveHistory(){
        cy.xpath(this.click_apps_Leaves_MyLeaveHistory).click();
        cy.url().should('include','/leaves')
        cy.xpath(this.assert_MyleaveHistory_Page_title).should('have.text',"My Leaves")
    }
    header_apps_Leaves_click_ForMyAproval(){
        cy.xpath(this.click_apps_Leaves_ForMyApproval).click();
        cy.xpath(this.assert_ForMyApproval_Page_title).should('have.text',"Leave Applications")
    }

    //APPS-GROUP CHANGE
    header_apps_click_groupchange(){
        cy.xpath(this.click_apps_groupchange).should('be.visible')
        cy.xpath(this.click_apps_groupchange).click();
        cy.url().should('include','/groupchange')
        cy.xpath(this.assert_groupchange_Page_title).should('have.text',"Group Change Request")
    }

    //APPS-MY BILLS
    mousehover_header_apps_MyBills(){
        cy.xpath(this.hover_apps_mybills).trigger('mouseover').click();
    }
    header_apps_visible_MyBills(){
        cy.xpath(this.hover_apps_mybills).should('be.visible')
        cy.xpath(this.hover_apps_mybills).trigger('mouseover').click(); 
    }
    header_apps_bills_click_CreateNewRequest(){
        cy.xpath(this.click_apps_mybills_CreateNewRequest).should('be.visible')
        cy.xpath(this.click_apps_mybills_CreateNewRequest).click();
        cy.url().should('include','/createnew')
        cy.xpath(this.assert_createNewRequest_Page_title).should('have.text',"Create Bill")
    }
    header_apps_bills_click_MyBillsHistory(){
        cy.xpath(this.click_apps_mybills_MyBillsHistory).should('be.visible')
        cy.xpath(this.click_apps_mybills_MyBillsHistory).click();
        cy.url().should('include','/billshistory')
        cy.xpath(this.assert_MyBillsHistory_Page_title).should('have.text',"My Bills History")
    }
    header_apps_bills_click_Category(){
        cy.xpath(this.click_apps_mybills_Category).should('be.visible')
        cy.xpath(this.click_apps_mybills_Category).click();
        cy.url().should('include','/Reim/admin')
        cy.xpath(this.assert_Category_Page_title).should('have.text',"Reimbursement Master")
    }
    header_apps_bills_click_DeptApproval(){
        cy.xpath(this.click_apps_mybills_DeptApproval).should('be.visible')
        cy.xpath(this.click_apps_mybills_DeptApproval).click();
        cy.url().should('include','/Deptapprove')
        cy.xpath(this.assert_DeptApproval_Page_title).should('have.text',"DEPARTMENT APPROVALS")
    }
    header_apps_bills_click_DeptHistory(){
        cy.xpath(this.click_apps_mybills_DeptHistory).should('be.visible')
        cy.xpath(this.click_apps_mybills_DeptHistory).click();
        cy.url().should('include','/Depthistory')
        cy.xpath(this.assert_DeptHistory_Page_title).should('have.text',"DEPARTMENT HISTORY")
    }
    header_apps_bills_click_FinApprovals(){
        cy.xpath(this.click_apps_mybills_Finapproval).should('be.visible')
        cy.xpath(this.click_apps_mybills_Finapproval).click();
        cy.url().should('include','/Finapproval')
        cy.xpath(this.assert_Finapproval_Page_title).should('have.text',"FINANCE APPROVALS")
    }
    header_apps_bills_click_FinHistory(){
        cy.xpath(this.click_apps_mybills_FinHistory).should('be.visible')
        cy.xpath(this.click_apps_mybills_FinHistory).click();
        cy.url().should('include','/Financehistory')
        cy.xpath(this.assert_FinHistory_Page_title).should('have.text',"FINANCE HISTORY")
    }
    
    

}
export default new Headers();