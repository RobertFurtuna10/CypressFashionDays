import * as locators from '../Utils/MainPageLocators'

class MainPage{

    VerifyLogo(){
        cy.get(locators.LogoSite).should('be.visible').and('have.attr','src')
    }

    verifyTextForEachElement(expectedTextArray) {
    cy.get(locators.genreNames).each(($element, index) => {
        const text = $element.text().trim();
        expect(text).to.equal(expectedTextArray[index]);
    });
}
    verifySearchBox(){
        cy.get(locators.searchBox)
            .as('searchbox')
            .should('be.visible')
            .and('have.text', 'Cauta...');
    }

    verifyLoginIcon(){
        cy.get(locators.loginIcon).should('be.visible')
    }

    verifyCustomerSupportIcon(){
        cy.get(locators.customerSupportIcon).should('be.visible')
    }

    verifyWishlistIcon(){
        cy.get(locators.wishlistIcon).should('be.visible')
    }
    verifyAddToCartIcon(){
        cy.get(locators.addToCartIcon).should('be.visible')
    }
}
export default new MainPage();
