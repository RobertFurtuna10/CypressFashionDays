
const ProductNameSubTitle = '.product-card-name';
const WishlistRemoveButton = '.wishlist-product-actions > .submit'
const DisplayOfEmptyWishlit = '.inner-white-box > .row > .col-xs-12 > span'
const SimilarProduct ='.icon-visual-recomm'
const SimilarProductBox = '.similar-products-box'
class WishlistPage{
 
   VerifyProductNameInWishlist(content){
    cy.get(ProductNameSubTitle).then((element)=>{
        const ActualText = element.text();
        expect(ActualText.includes(content)).to.be.true
    })
   }
   ClickRemoveProduct(){
    cy.get(WishlistRemoveButton).click()
   }
   VerifyEmptyWishlist(){
   cy.get(DisplayOfEmptyWishlit).then((element) => {
    const resultText = element.text().trim().replace(/\s+/g, ' ');
    const expected_result = "Inca nu ai produse adaugate aici, dar cu siguranta ai de unde alege. Cauta si salveaza-le pe cele pe gustul tau!"
    // expect(resultText).to.equal(expected_result);
    expect(resultText.includes(expected_result)).to.be.true
    });
    }
    ClickOnSimilarProductButton(){
        cy.get(SimilarProduct).click()
    }
    VerifyExistsSimilarProductDisplay(){
        cy.get(SimilarProduct).should('be.visible')
    }

}

export default new WishlistPage();
 
    