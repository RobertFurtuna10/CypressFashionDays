/// <reference types="Cypress" />
import CartPage from "./PageObject/CartPage";

describe('FashionDays Search Functionality', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(this.data.url);
        })

    })
    it('Test Product add to cart ', () => {
        cy.SearchProduct('ochelari de soare')
        
        cy.selectProductAndAddToCart(1)
        
        cy.get('#customer-basket > .container-icon > .icon').click()
        
        cy.get('.cart-product-box').should("be.visible")

      });
      
      
      it('Verify add to cart products sum', () => {
        cy.SearchProduct('ceas')

        cy.selectProductAndAddToCart(0)
        
        cy.SearchProduct('geanta'); // Redeschidem pagina de start pentru a adăuga un alt produs

        cy.selectProductAndAddToCart(1)
        
        cy.get('#buy-box').click();
      
        cy.get('#customer-basket > .container-icon').click()

        const productPrices = CartPage.getProductPrices()
        
        const totalPrice = CartPage.getTotalPrice();

        totalPrice.then(actualTotalPrice => {
          const expectedTotalPrice = productPrices.reduce((acc, curr) => acc + curr, 0);
          expect(actualTotalPrice).to.equal(expectedTotalPrice);
      });

        
      });
      it('Test remove product from cart', () => {
        cy.SearchProduct("ochelari de soare")
        cy.selectProductAndAddToCart(4)
        cy.get('#customer-basket > .container-icon > .icon').click()
        cy.get('.cart-product-remove').click()
        cy.get('.empty-cart-bnpl-toggle h3').then((element)=>{
            const Cart = element.text().trim()
            expect(Cart).to.equal("Cosul tau e gol acum, hai sa il umpli cu tot ce vrei sa porti maine!")
        })
      });

      it('Test add product to wishlist from my cart ', () => {
        cy.SearchProduct("ochelari de soare")
        cy.get("img[class='lazy product-over lazy-not-on-mobile']").eq(0).click();
        cy.get('#buy-box').click()
        cy.get('#customer-basket > .container-icon > .icon').click()
        cy.get('.cart-product-save-to-wishlist').click()
        cy.get("#prodFavCountHeader").should("have.text","1")
      });



});