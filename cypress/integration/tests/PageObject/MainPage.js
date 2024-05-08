import * as locators from '../Utils/MainPageLocators'

class MainPage{

    VerifyLogo(){
        cy.get(locators.LogoSite).should('be.visible').and('have.attr','src')
    }

}
export default new MainPage();
