import RegisterPage from "./PageObject/RegisterPage"
describe('FashionDays main page', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(Cypress.env('registerUrl'));
        })
    })
    it('Check if I can create an account', function() {
      RegisterPage.GenerateRandomEmailAndEnterInField()
      RegisterPage.EnterPassword(this.data.Password)
      RegisterPage.ClickTermCheckbox();
      RegisterPage.ClickRegisterButton();
      RegisterPage.VerifyTitleAfterCreateAccount();
    })
    it('Check if I recieve an email when I create an account', function() {
        RegisterPage.GenerateRandomEmailAndEnterInField();
        RegisterPage.EnterPassword(this.data.Password)
        RegisterPage.ClickTermCheckbox();
        RegisterPage.ClickRegisterButton();
        RegisterPage.checkEmailWithSubject("Mai ai putin siii... gata!")

     })
    it('Check if I receive a confirmation text after I press on "sunt barbat" or "sunt femeie" button from email message', function() {
        RegisterPage.GenerateRandomEmailAndEnterInField();
        RegisterPage.EnterPassword(this.data.Password)
        RegisterPage.ClickTermCheckbox();
        RegisterPage.ClickRegisterButton();
        cy.wait(4000)
        RegisterPage.checkConfirmationText("Contul tau a fost confirmat.",'barbat')     
    })
    it('Check if you get an error when you try to register with empty fields and checkboxes', function() {
        RegisterPage.ClickRegisterButton();
        RegisterPage.VerifyEmptyEmailField();
        RegisterPage.VerifyEmptyPasswordField();
        RegisterPage.VerifyEmptyCheckboxTerm();
    })
      
})
