export const assertions = {
    headers: {
    //timesheet
        assert_TimesheetPage_title:"//h5[normalize-space()='My TimeSheet']",

    //leaves
        assert_ApplyLeave_Page_title:"//h6[normalize-space()='Leave Application']",
        assert_MyleaveHistory_Page_title:"//h5[normalize-space()='My Leaves']",
        assert_ForMyApproval_Page_title:"//h5[normalize-space()='Leave Applications']",

    //group change
        assert_groupchange_Page_title:"//button[normalize-space()='Group Change Request']",

    //Mybills
        assert_createNewRequest_Page_title:"//span[normalize-space()='Create Bill']",
        assert_MyBillsHistory_Page_title:"//span[normalize-space()='My Bills History']",
        assert_Category_Page_title:"//span[normalize-space()='Reimbursement Master']",
        assert_DeptApproval_Page_title:"//span[normalize-space()='DEPARTMENT APPROVALS']",
        assert_DeptHistory_Page_title:"//span[normalize-space()='DEPARTMENT HISTORY']"  ,     
        assert_Finapproval_Page_title:"//span[normalize-space()='FINANCE APPROVALS']",
        assert_FinHistory_Page_title:"//span[normalize-space()='FINANCE HISTORY']",
    
    //Goals & Reviews
        assert_initiation_Page_title:"//h6[normalize-space()='Initiate G&R']",
        assert_MyGoals_Page_title: "//strong[normalize-space()='Current Year Goals']"

    },
};
