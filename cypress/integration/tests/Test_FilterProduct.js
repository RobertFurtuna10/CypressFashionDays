import ProductCatalogue from "./PageObject/ProductCatalogue"
describe('FilterProduct tests suites', () => {
    beforeEach(()=>{
        cy.fixture('DataTest').then(function (data) {
            this.data = data;
            cy.visit(Cypress.env('url'));
            cy.SearchProduct('Tricou')
        })
    })
 

    it("Should Filter product by Columbia brand", function(){
    
        ProductCatalogue.selectColumbiaBrand()
        ProductCatalogue.VerifyNameOfProducts('Columbia')
        
      
    })

    it('Should Filter products by largest to smallest prices', function(){

       ProductCatalogue.ClickFilterDrop(this.data.SmallestPrices)

       cy.wait(2000)

       ProductCatalogue.GetPriceTextProducts().then((actualPricesText) => {
        ProductCatalogue.verifyPriceOrderAscending(actualPricesText);
       })
    })

    it('Should filter products by yellow color', function(){

        ProductCatalogue.ClickColorFilter(this.data.Colors.Valid[1])
       
        cy.VerifyIncludesInUrl(this.data.Colors.Valid[1])

    })
    
    it('Should Filter product by multiple colors', function(){
        
        ProductCatalogue.ClickColorFilter(this.data.Colors.Valid[0])

        ProductCatalogue.ClickColorFilter(this.data.Colors.Valid[1])

        cy.VerifyIncludesInUrl(this.data.Colors.Valid[1]).and('include',this.data.Colors.Valid[0])

    })
 })