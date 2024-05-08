/// <reference types="Cypress" />

import ProductCatalogue from "./PageObject/ProductCatalogue";

describe('FashionDays Search Functionality', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(Cypress.env('url'));
        })

    })
    it('Test adding product to wishlist', () => {
        // Search for a product and attempt to add it to the wishlist
        cy.SearchProduct('Bag');
        ProductCatalogue.ClickAddToWishlistByIndex(2);
        
        // Check for the display of a success message for adding to wishlist
        ProductCatalogue.GetSuccesfullMessagePopAddWishlist().then((ResultText) => {
            const expected_result = "Acest produs a fost adaugat in lista ta de favorite!";
            expect(ResultText).to.be.equal(expected_result);
        });
    });
    it('Test add product to wishlist', () => {
        cy.SearchProduct('Geanta')
        ProductCatalogue.ClickAddToWishlistByIndex(2)
        cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click()
        cy.get('#wishlist-top-menu').click()
        cy.get("[name='move-to-cart-products']").should("be.visible")
      
    })

    it('Test removing product from wishlist', () => {
        // Search for a product and add it to the wishlist
        cy.SearchProduct('Bag');
        cy.get(".js-add-to-wishlist").eq(2).click();
        
        // Close the confirmation message and access the wishlist
        cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click();
        cy.get('#wishlist-top-menu').click();
        
        // Remove the product from the wishlist and check for the display of a corresponding message
        cy.get('.wishlist-product-actions > .submit').click();
        cy.get('.inner-white-box > .row > .col-xs-12 > span').then((element) => {
            const resultText = element.text().trim().replace(/\s+/g, ' ');
            const expected_result = "Inca nu ai produse adaugate aici, dar cu siguranta ai de unde alege. Cauta si salveaza-le pe cele pe gustul tau!"
            expect(resultText).to.equal(expected_result);
        });
    })
    

    it('Test viewing similar products from wishlist', () => {
        // Search for a product and add it to the wishlist
        cy.SearchProduct('Bag');
        cy.get(".js-add-to-wishlist").eq(2).click();
        
        // Close the confirmation message and access the wishlist
        cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click();
        cy.get('#wishlist-top-menu').click();

        
        // Access the section of similar products from the wishlist and check their display
        cy.get('.icon-visual-recomm').click();

        cy.wait(2000)

        cy.get(".similar-products-box").should('be.visible');
    });
})