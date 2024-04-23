/// <reference types="Cypress" />
describe('FashionDays Search Functionality', () => {
    beforeEach(()=>{
        cy.fixture('example').then(function (data) {
            this.data = data;
            cy.visit(this.data.url);
        })

    })
    //   it('Test add product to wishlist', () => {
    //     cy.SearchProduct('Geanta')
    //     cy.get(".js-add-to-wishlist").eq(2).click()
    //     cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > .modal-title').then((element) => {
    //         const resultText = element.text().trim().replace(/\s+/g, ' ');
    //         const expected_result = "Acest produs a fost adaugat in lista ta de favorite!"
    //         expect(resultText).to.equal(expected_result);

    //   });

    // })
    // it('Test add product to wishlist', () => {
    //     cy.SearchProduct('Geanta')
    //     cy.get(".js-add-to-wishlist").eq(2).click()
    //     cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click()
    //     cy.get('#wishlist-top-menu').click()
    //     cy.get("[name='move-to-cart-products']").should("be.visible")
      
    // })
    // it('Test remove product to wishlist', () => {
    //     cy.SearchProduct('Geanta')
    //     cy.get(".js-add-to-wishlist").eq(2).click()
    //     cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click()
    //     cy.get('#wishlist-top-menu').click()
    //     cy.get('.wishlist-product-actions > .submit').click()
    //     cy.get('.inner-white-box > .row > .col-xs-12 > span').then((element) => {
    //     const resultText = element.text().trim().replace(/\s+/g, ' ');
    //     const expected_result = "Inca nu ai produse adaugate aici, dar cu siguranta ai de unde alege. Cauta si salveaza-le pe cele pe gustul tau!"
    //     expect(resultText).to.equal(expected_result);
    //     })
      
    // })
    it('Test see similar  products  from  wishlist', () => {
        cy.SearchProduct('Geanta')
        cy.get(".js-add-to-wishlist").eq(2).click()
        cy.get('#myFirstFav > .vertical-alignment-helper > .modal-dialog > .modal-content > .modal-header > #rce-sent-close > .icon-close-x').click()
        cy.get('#wishlist-top-menu').click()
        cy.get('.wishlist-product-actions > .submit').click()
        cy.get("")
      
    })




});