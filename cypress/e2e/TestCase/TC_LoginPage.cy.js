import LoginPage from "../../Pages/ER_LoginPage.cy"
describe('Login_Suite',()=>{
    beforeEach(function () {
        cy.fixture('LoginCredentials').as('credentials')
        .then(()=>{
            const hrAdmin = this.credentials.find(user => user.role === 'hradmin');
            cy.loginfunctionality(hrAdmin.username, hrAdmin.password);
        })
    })

    it('Validate dashboard after Login',()=>{ 
        LoginPage.login_url_assertion();     
    })
})