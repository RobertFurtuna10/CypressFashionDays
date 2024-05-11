const emailField = '#email'
const passwordField = '#password'
const LoginButton = '#pizokel_customer_submit'

class LoginPage{
 
    EnterEmail(context){
        cy.get(emailField).type(context)
    }  
    EnterPassword(pass){
        cy.get(passwordField).type(pass)
    }
    ClickLogin(){
        cy.get(LoginButton).click({force:true})
    }
    ClickForgotPassword(){
     cy.contains("Ai uitat parola?").click()
    }

}

export default new LoginPage();
 
    