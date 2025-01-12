import Headers from "../../Pages/ER_Headers.cy";
import LoginPage from "../../Pages/ER_LoginPage.cy"

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
    it('Click header_Apps Timesheet',()=>{
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
    it.only('Click header_Apps_Leaves MY LEAVE HISTORY',()=>{
        Headers.mousehover_header_apps();
        Headers.mousehover_header_apps_Leaves();
        Headers.header_apps_Leaves_click_MyLeaveHistory();
    })
})