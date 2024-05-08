import * as locators from '../Utils/WishlistPageLocators'
    
    const FilterDropSelector = '.filterDrop'
    const priceTextSelector = '.sale-wrapper'
    const PageNumberTwo = '#paginationContainerHeader > #paginationLinks > nav > .pagination > :nth-child(3) > .paginationLink'
    const CartIcon = '#customer-basket > .container-icon'
    const ProductTitleBrand = '.cart-product-box'

class ProductCataloguePage{

    ClickAddToWishlistByIndex(index){
        cy.get(locators.AddWishlistIcon).eq(index).click()
    }
    GetSuccesfullMessagePopAddWishlist() {
        return cy.get(locators.PopMessageWishlist)
            .then((element) => {
                const resultText = element.text().trim().replace(/\s+/g, ' ');
                return resultText;
            });
    }
    ClickColorFilter(color){
        cy.get(`[data-gtm-name="${color.toUpperCase()}"`).click({force:true})
    }
    ClickFilterDrop(choose){
        cy.get(FilterDropSelector).click({force:true})
        cy.contains(choose).click()
    }
    GetPriceTextProducts() {
        const prices = [];
        return cy.get(priceTextSelector).each(($el) => {
            const productPrice = $el.text();
            const formatPrice = parseInt(productPrice.replace('lei', '').trim());
            prices.push(formatPrice);
        }).then(() => prices);
    }
    verifyPriceOrderAscending(prices) {
        for(let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).to.be.at.most(prices[i + 1]); // Verificăm fiecare element cu următorul
        }

    }
    ClickPage2(){
        cy.get(PageNumberTwo).click();
    }
    ClickCartIcon(){
        cy.get(CartIcon).click();
    }
    VerifyProductTitleBrand(){
        cy.get(ProductTitleBrand).should("be.visible")
    }


}

export default new ProductCataloguePage();
 
    