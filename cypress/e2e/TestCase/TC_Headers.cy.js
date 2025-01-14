import Headers from "../../Pages/ER_Headers.cy";
import LoginPage from "../../Pages/ER_LoginPage.cy"

describe('Login_Suite for QA All Access Account',()=>{
    beforeEach(function () {
        cy.fixture('LoginCredentials').as('credentials')
        .then(()=>{
            const hrAdmin = this.credentials.find(user => user.role === 'qaallacess');
            cy.loginfunctionality(hrAdmin.username, hrAdmin.password);
        })
    })

    //APPS-TIMESHEET
    it('Hover_header_Apps visibility of Timesheet',()=> {
        Headers.mousehover_header_apps();
        Headers.header_apps_visible_timesheet();   
    })

    //APPS-GROUP CHANGE
    it('Click header_Apps GROUP',()=> {
        Headers.mousehover_header_apps();
        Headers.header_apps_click_groupchange(); 
    })

    //APPS-MY BILLS
    it('Hover_header_Apps visibility of MY BILLS',()=> {
        Headers.mousehover_header_apps();
        Headers.header_apps_visible_MyBills();   
    })
    it('Click header_Apps_Mybills CREATE NEW REQUEST',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_CreateNewRequest(); 
    })
    it('Click header_Apps_Mybills MY BILLS HISTORY',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_MyBillsHistory(); 
    })
    it('Click header_Apps_Mybills CATEGORY',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_Category(); 
    })
    it('Click header_Apps_Mybills DEPT APPROVAL',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_DeptApproval(); 
    })
    it('Click header_Apps_Mybills DEPT HISTORY',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_DeptHistory(); 
    })
    it('Click header_Apps_Mybills FINANCE APPROVALS',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_FinApprovals(); 
    })
    it('Click header_Apps_Mybills FINANCE HISTORY',()=> {
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_MyBills();  
        Headers.header_apps_bills_click_FinHistory(); 
    })

})







describe('Login_Suite for HRADMIN',()=>{
    beforeEach(function () {
        cy.fixture('LoginCredentials').as('credentials')
        .then(()=>{
            const hrAdmin = this.credentials.find(user => user.role === 'hradmin');
            cy.loginfunctionality(hrAdmin.username, hrAdmin.password);
        })
    })


    //APPS-TIMESHEET
    it('Hover_header_Apps visibility of Timesheet',()=> {
        Headers.mousehover_header_apps();
        Headers.header_apps_visible_timesheet();   
    })
    it('Click header_Apps TIMESHEET',()=>{
        Headers.mousehover_header_apps(); 
        Headers.header_apps_click_timesheet();    
    })

    //APPS-LEAVES
    it('Hover_header_Apps visibility of Leaves',()=>{
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_Leaves();
        Headers.header_apps_visible_Leaves();
    })
    it('Click header_Apps_Leaves APPLY LEAVE',()=>{
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_Leaves();
        Headers.header_apps_Leaves_click_ApplyLeaves();
    })
    it('Click header_Apps_Leaves MY LEAVE HISTORY',()=>{
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_Leaves();
        Headers.header_apps_Leaves_click_MyLeaveHistory();
    })
    it('Click header_Apps_Leaves FOR MY APPROVAL',()=>{
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_Leaves();
        Headers.header_apps_Leaves_click_ForMyAproval();
    })
})