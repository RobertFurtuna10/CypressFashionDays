/// <reference types="Cypress" />

import MainPage from "./PageObject/MainPage";
describe('FashionDays main page', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(Cypress.env('url'));
        })
    })

    it('Check if we are on the main page', function() {
        MainPage.VerifyLogo();
    })

    it('Check if genres names exists on the main page', function() {
       MainPage.verifyTextForEachElement(this.data.genres)
    });
    
    it('Check if the url for FashionDays page is correct', () => {
        cy.VerifyIncludesInUrl('fashiondays')
    });

    it('Check if search box exists on the main page', () => {
        MainPage.verifySearchBox()
    });

    it('Verify if login icon is visible on the main page', () => {
        MainPage.verifyLoginIcon()
    })

    it('Verify if customer support icon is visible on the main page', () => {
        MainPage.verifyCustomerSupportIcon()
    })

    it('Verify if wishlist icon is visible on the main page', () => {
        MainPage.verifyWishlistIcon()
    })

    it('Verify if add to cart icon is visible on the main page', () => {
        MainPage.verifyAddToCartIcon()
    })


});


