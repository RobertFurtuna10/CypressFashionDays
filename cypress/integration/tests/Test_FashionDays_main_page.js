/// <reference types="Cypress" />
describe('FashionDays main page', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(this.data.url);
        })
    })

    it('Check if we are on the main page', function() {
      cy.get('.hidden-xs > img').should('be.visible')
    })

    it('Check if genres names exists on the main page', function() {
       
        cy.get('#tag-menu > .nav > :nth-child(n) > a').each(($e1, index) => {
            const text = $e1.text().trim();
            expect(text).to.equal(this.data.genres[index]);
        
        });
    });
    
    it('Check if the url for FashionDays page is correct', () => {
        cy.VerifyIncludesInUrl('fashiondays')
        // cy.url().should('include', 'fashiondays');
    });

    it('Check if search box exists on the main page', () => {
        cy.get('.text-placeholder')
            .as('searchbox')
            .should('be.visible')
            .and('have.text', 'Cauta...');
    });

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


