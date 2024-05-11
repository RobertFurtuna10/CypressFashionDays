const AccountMenu = '.leftside-navigation'

class MyAccountPage{
 
    VerifyAccountMenu(){
        cy.get(AccountMenu).should("be.visible")
    }

}

export default new MyAccountPage();
 
    