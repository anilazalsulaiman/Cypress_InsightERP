class LoginPage{

    byp_username = "input[placeholder='IN1234']"
    byp_password = "input[type='password']"
    click_Login_Button ="button[type='submit']"
    login_Assertion = "//button[normalize-space()='View Profile']"

    visitURL(){
        cy.visit('login/index_old03/')
    }
    enterusername(username){
        cy.get(this.byp_username).type(username)
    }
    enterPassword(password){
        cy.get(this.byp_password).type(password)
    }
    clickLoginSubmit(){
        cy.get(this.click_Login_Button).click()
    }
    assertLoginDashboard(){
        cy.xpath(this.login_Assertion).should('have.text','View Profile')
    }

    // loginfunctionality(username,password,){
    //     cy.visit('login/index_old03/')
    //     cy.get(this.byp_username).type(username)
    //     cy.get(this.byp_password).type(password)
    //     cy.get(this.click_Login_Button).click()
    //     cy.wait(4000)
    //     cy.xpath(this.login_Assertion).should('have.text','View Profile')
    // }
    login_url_assertion(){
        cy.xpath(this.login_Assertion).should('have.text','View Profile')
    }
}
//export default LoginPage;
export default new LoginPage();