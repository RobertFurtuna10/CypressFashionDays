import * as locators from '../Utils/WishlistPageLocators'

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

}

export default new ProductCataloguePage();
