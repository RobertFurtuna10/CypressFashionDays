
const ResetPassField = "input[placeholder='Te rugam sa introduci adresa de email.']"
const NewPassword = '#pizokel_customer_password_new_password_first'
const ConfirmNewPass = '#pizokel_customer_password_new_password_second'
const SubmitNewPassword ='#submit-change-password'
const SuccesfullyMessagePasswordChange = '.flash-notice' 
class ForgotPasswordPage{
    
    EnterEmail(mail){
    cy.get(ResetPassField).type(mail)
    }
    ClickSentButton(){
    cy.contains("Trimite").click()
    }
    CheckReceiveMail(){
        return cy.mailosaurListMessages("wuvxtq9v")
        .then((result)=>{
          const email =result.items[0];
          expect(email.subject).to.equal("Reseteaza-ti parola Fashion Days");
          return cy.mailosaurGetMessageById(email.id);
    })
}
    processEmailAndVisitResetPasswordLink(email){
        return cy.visit(email.html.links[1].href);
    }
    EnterNewPassword(pass){
        cy.get(NewPassword).type(pass)
    }
    EnterConfirmNewPassword(pass){
        cy.get(ConfirmNewPass).type(pass)
    }
    ClickSaveNewPassword(){
        cy.get(SubmitNewPassword).click();
    }
    VerifySuccesfullyChangePassword()
    {
        // return cy.get('div .alert-success').should('be.visible')

        return cy.get(SuccesfullyMessagePasswordChange).then(function(element){
            const actualText = element.text().trim()
            console.log(actualText)
            cy.log(actualText)
           expect(actualText.includes("Parola a fost resetata cu succes! Vei fi redirectionat in shop in cateva secunde.")).to.be.true
           cy.log(actualText)

        })
    }


}

export default new ForgotPasswordPage();
