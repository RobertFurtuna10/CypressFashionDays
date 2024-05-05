import * as locators from '../Utils/RegisterPageLocators';

class Register{

    ClickRegisterButton(){
        cy.get(locators.registerButton).click();
    }
    VerifyEmptyEmailField(){
        cy.get(locators.emailErrorFieldMessage).should('have.text','Acest camp este obligatoriu')
    }
    VerifyEmptyPasswordField(){
        cy.get(locators.passwordErrorFieldMessage).should('have.text','Acest camp este obligatoriu')
    }
    VerifyEmptyCheckboxTerm(){
        cy.get(locators.checkboxTermErrorMessage).should('have.text','Te rugam sa accepti termenii si conditiile pentru a putea continua cu crearea contului')
    }
    EnterEmail(email){
        cy.get(locators.emailField).type(email);
    }
    EnterPassword(pass){
        cy.get(locators.passwordField).type(pass);
    }
    ClickTermCheckbox(){
        cy.get(locators.termCheckbox).click({force:true});
    }
    VerifyTitleAfterCreateAccount(){
        cy.get(locators.title).should('have.text','Bine ai venit la FashionDays')
    }
    GenerateRandomEmailAndEnterInField(){
        cy.mailosaurGenerateEmailAddress("wuvxtq9v").then((emailAddress) => {
            this.EnterEmail(emailAddress)
         });
    }
    checkEmailWithSubject(expectedSubject) {
        return cy.mailosaurListMessages('wuvxtq9v').then((result) => {
            if (result.items.length === 0) {
                throw new Error('No email received.');
            }
    
            const email = result.items[0];
            expect(email.subject).to.equal(expectedSubject);
        });
    }
    checkConfirmationText(confirmationText,genres) {
        return cy.mailosaurListMessages("wuvxtq9v")
            .then((result) => {
                if (result.items.length === 0) {
                    throw new Error('No email received.');
                }
    
                const email = result.items[0];
                return cy.mailosaurGetMessageById(email.id);
            })
            .then((email) => {
                let confirmSignupLinkSuntFemeie = email.html.links[1].href;
                let confirmSignupLinkSuntBarbat = email.html.links[2].href;
                
                if (genres.toLowerCase() === 'barbat' || genres === 'Sunt Barbat' || genres === 'man') {
                    return cy.visit(confirmSignupLinkSuntBarbat);
                }
                else if (genres.toLowerCase() === 'femeie' || genres === 'Sunt Femeie' || genres ==='women') {
                    return cy.visit(confirmSignupLinkSuntFemeie);
                }
                else {
                    throw new Error('Invalid arguments provided.');
                }
            })
            .then(() => {
                cy.contains(confirmationText).should("be.visible");
                if (genres.toLowerCase() === 'barbat' || genres === 'Sunt Barbat' || genres === 'man') {
                    cy.url().should('include',genres)
                }
                else if (genres.toLowerCase() === 'femeie' || genres === 'Sunt Femeie' || genres === 'women') {
                    cy.url().should('include',genres)
                }
                else {
                    throw new Error('Invalid arguments provided.');
                }
            });
        }

}
export default new Register();
