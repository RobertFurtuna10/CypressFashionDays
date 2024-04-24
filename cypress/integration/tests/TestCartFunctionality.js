/// <reference types="Cypress" />
describe('FashionDays Search Functionality', () => {
    beforeEach(()=>{
        cy.fixture('example').then(function (data) {
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
        
        cy.SearchProduct('geanta') ; // Redeschidem pagina de start pentru a adăuga un alt produs
        cy.selectProductAndAddToCart(1)
        cy.get('#buy-box').click();
      
        cy.get('#customer-basket > .container-icon').click()

        let sum_of_products = [];

        // Colectăm prețurile produselor
        cy.get('.sale-price').each((element) => {
            cy.wrap(element).invoke('text').then(priceText => {
                const priceTitleProduct = parseFloat(priceText.replace('lei', '').trim()); // Convertim în float și eliminăm "lei" și spațiile
                sum_of_products.push(priceTitleProduct);
            });
        });
        
        // Obținem prețul total și verificăm suma produselor cu acesta
        cy.get('.cart-summary-box-total > :nth-child(2)').invoke('text').then(totalPriceText => {
            const totalPrice = parseFloat(totalPriceText.replace('lei', '').trim()); // Convertim în float și eliminăm "lei" și spațiile
            const suma = sum_of_products.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            // Verificăm suma produselor cu prețul total
            // console.log('Suma produselor:', sum_of_products);
            // console.log('Prețul total:', totalPrice);
            // console.log('',suma)
            expect(suma).to.equal(totalPrice);
        });
        
      });
      it('Test remove product from cart  ', () => {
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