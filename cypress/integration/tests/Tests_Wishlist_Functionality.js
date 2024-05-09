/// <reference types="Cypress" />

import ProductCatalogue from "./PageObject/ProductCatalogue";
import WishlistPage from "./PageObject/WishlistPage";

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
    it('Test verify that product exist in wishlist', () => {
        
        cy.SearchProduct('Geanta')
        
        ProductCatalogue.ClickAddToWishlistByIndex(2)

        cy.get("#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x").click()
       
        ProductCatalogue.ClickOnMyWishlist();

        cy.wait(2000)

        WishlistPage.VerifyProductNameInWishlist('Geanta')
    
    })
      


    it('Test removing product from wishlist', () => {
        // Search for a product and add it to the wishlist
        cy.SearchProduct('Bag');
      
        ProductCatalogue.ClickAddToWishlistByIndex(2)
        
        // Close the confirmation message and access the wishlist
        cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click();
        
        ProductCatalogue.ClickOnMyWishlist();
        
        // Remove the product from the wishlist and check for the display of a corresponding message
        WishlistPage.ClickRemoveProduct()


        WishlistPage.VerifyEmptyWishlist()
    })

    

    it('Test viewing similar products from wishlist', () => {
        // Search for a product and add it to the wishlist
        cy.SearchProduct('Bag');
       
        ProductCatalogue.ClickAddToWishlistByIndex(2)
        
        // Close the confirmation message and access the wishlist
        cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click();
    
        
        ProductCatalogue.ClickOnMyWishlist();

        
        // Access the section of similar products from the wishlist and check their display
        
        WishlistPage.ClickOnSimilarProductButton()


        WishlistPage.VerifyExistsSimilarProductDisplay()
    });

})