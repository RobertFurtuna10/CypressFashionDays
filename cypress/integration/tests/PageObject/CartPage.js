const ProductContainer = '.cart-product-box'
const RemoveProductIcon = '.cart-product-remove'
const EmptyCartMessage = '.empty-cart-bnpl-toggle h3'
class CartPage{

    
    getProductPrices() {
        const prices = [];
        cy.get('.sale-price').each((element) => {
            cy.wrap(element).invoke('text').then(priceText => {
                const price = parseFloat(priceText.replace('lei', '').trim());
                prices.push(price);
            });
        });
        return prices;
    }
    getTotalPrice() {
        return cy.get('.cart-summary-box-total > :nth-child(2)').invoke('text').then(totalPriceText => {
            return parseFloat(totalPriceText.replace('lei', '').trim());
        });
    }
    VerifyProductExistInCart(){
        cy.get(ProductContainer).should("be.visible")
    }

    ClickRemoveItemFromCart(){
        cy.get(RemoveProductIcon).click();
    }
    verifyEmptyCartMessage(){
        cy.get(EmptyCartMessage).then(($element) => {
            const cartText = $element.text().trim();
            expect(cartText).to.equal("Cosul tau e gol acum, hai sa il umpli cu tot ce vrei sa porti maine!");
        });
    }


}
export default new CartPage();
