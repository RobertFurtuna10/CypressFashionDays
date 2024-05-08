/// <reference types="Cypress" />
import CartPage from "./PageObject/CartPage";
import ProductCatalogue from "./PageObject/ProductCatalogue";
describe('FashionDays Search Functionality', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(Cypress.env('url'));
        })

    })
    it('Check if i can add to cart a product', () => {
        cy.SearchProduct('ochelari de soare')
        
        cy.selectProductAndAddToCart(1)
        
        ProductCatalogue.ClickCartIcon();
        
        CartPage.VerifyProductExistInCart();

      });
      
      
      it('Verify add to cart products sum', () => {
        cy.SearchProduct('ceas')

        cy.selectProductAndAddToCart(0)
        
        cy.SearchProduct('geanta'); // Redeschidem pagina de start pentru a adăuga un alt produs

        cy.selectProductAndAddToCart(1)
      
        ProductCatalogue.ClickCartIcon();

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
        
        ProductCatalogue.ClickCartIcon()
       
        CartPage.ClickRemoveItemFromCart()

        CartPage.verifyEmptyCartMessage()

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