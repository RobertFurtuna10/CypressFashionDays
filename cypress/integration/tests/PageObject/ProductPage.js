import * as locators from '../Utils/MainPageLocators'
const AddToCart = '#buy-box'

class ProductPage{
 
    clickAddToCart(){
        cy.get(AddToCart).click()

    }
    ClickOnIconCart(){
        cy.get(locators.addToCartIcon).click();
    }
    

}

export default new ProductPage();
 
    