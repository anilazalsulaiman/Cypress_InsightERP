class Headers{

    hover_apps=":nth-child(2) > :nth-child(1) > .css-mukiy0 > .css-1y19ivf"

    click_apps_timesheet="a[href='/apps/timesheet/']"
    assert_TimesheetPage_title="//h5[normalize-space()='My TimeSheet']"

    hover_apps_Leaves="(//p[normalize-space()='Leaves'])[1]"
    click_apps_Leaves_ApplyLeave="//a[@href='/apps/leaves/apply/']"
        assert_ApplyLeave_Page_title="//h6[normalize-space()='Leave Application']"
    click_apps_Leaves_MyLeaveHistory="//a[@href='/apps/leaves/']"
        assert_MyleaveHistory_Page_title="//h5[normalize-space()='My Leaves']"

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
        cy.wait(2000)
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
        cy.xpath(this.assert_ApplyLeave_Page_title).should('have.text',"Leave Application")
    }
    header_apps_Leaves_click_MyLeaveHistory(){
        cy.xpath(this.click_apps_Leaves_MyLeaveHistory).click();
        cy.xpath(this.assert_MyleaveHistory_Page_title).should('have.text',"My Leaves")
    }
}
export default new Headers();