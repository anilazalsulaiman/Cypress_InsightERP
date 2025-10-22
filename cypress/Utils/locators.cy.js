export const locators={
    headers:{
    //hover APPS
        hover_apps:":nth-child(2) > :nth-child(1) > .css-mukiy0 > .css-1y19ivf",

    //timesheet
        click_apps_timesheet:"a[href='/apps/timesheet/']",
    
    //leaves
        hover_apps_Leaves:"(//p[normalize-space()='Leaves'])[1]",
        click_apps_Leaves_ApplyLeave:"//a[@href='/apps/leaves/apply/']",
        click_apps_Leaves_MyLeaveHistory:"//a[@href='/apps/leaves/']",
        click_apps_Leaves_ForMyApproval:"(//a[@href='/apps/leaves/requests/'])[1]",

    //group change
        click_apps_groupchange:"//a[@href='/apps/groupchange/']",

    //mybills
        hover_apps_mybills:"(//p[normalize-space()='My Bills'])[1]",
        click_apps_mybills_CreateNewRequest:"//a[@href='/apps/Reim/createnew/']",
        click_apps_mybills_MyBillsHistory:"//a[@href='/apps/Reim/createnew/billshistory/']",
        click_apps_mybills_Category:"//a[@href='/apps/Reim/admin/']",
        click_apps_mybills_DeptApproval:"//a[@href='/apps/Reim/deptapprove/Deptapprove/']",
        click_apps_mybills_DeptHistory:"//a[@href='/apps/Reim/deptapprove/Depthistory/']",  
        click_apps_mybills_Finapproval:"//a[@href='/apps/Reim/finapproval/Finapproval/']",
        click_apps_mybills_FinHistory:"//a[@href='/apps/Reim/finapproval/Financehistory/']",
    
    //Goals & Reviews
        hover_apps_GandR:"(//p[normalize-space()='Goals and Reviews'])[1]",
        click_apps_GandR_initiation:"//a[@href='/apps/GandR/admin/initiate/']",
        click_apps_GandR_MyGoals : "//a[@href='/apps/GandR/employee/mygoals/']",
    }
}