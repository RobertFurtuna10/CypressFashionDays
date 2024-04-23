/// <reference types="Cypress" />
describe('FashionDays main page', () => {
    beforeEach(()=>{
        cy.visit('https://www.fashiondays.ro/')
    })

    it('Check if we are on the main page', () => {
      cy.get('.hidden-xs > img').should('be.visible')
    })

    it('Check if genres names exists on the main page', () => {
        cy.get('#tag-menu > .nav > :nth-child(n) > a').each(($e1, index) => {
            const texteDorite = ["Femei", "Barbati", "Fete", "Baieti"];
            const text = $e1.text().trim();
            expect(text).to.equal(texteDorite[index]);
        });
    });
    
    it('Check if the url for FashionDays page is correct', () => {
        cy.url().should('include', 'fashiondays');
    });

    it('Check if search box exists on the main page', () => {
        cy.get('.text-placeholder').as('searchbox').should('be.visible').and('have.text', 'Cauta...')
        // cy.get('@searchbox').should('be.visible')
    })
    it('Verify if login icon is visible on the main page', () => {
        cy.get('#login-dropdown').should('be.visible')
    })

    it('Verify if customer support icon is visible on the main page', () => {
        cy.get('#customer-support').should('be.visible')
    })

    it('Verify if wishlist icon is visible on the main page', () => {
        cy.get('#wishlist-top-menu').should('be.visible')
    })

    it('Verify if add to cart icon is visible on the main page', () => {
        cy.get('.icon-fdux_cart').should('be.visible')
    })

});


