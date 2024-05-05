class Register{

    
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

        


}
export default new Register();
