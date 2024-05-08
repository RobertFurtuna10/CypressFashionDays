import ProductCatalogue from "./PageObject/ProductCatalogue"
describe('FashionDays Search Functionality', () => {
    
    beforeEach(()=>{
        cy.visit(Cypress.env('url'))
    })

    it("Should Filter product by Columbia brand", () => {
        
        cy.SearchProduct('Tricou')

        // cy.get("a[data-title='Treninguri']").scrollIntoView()
        // cy.wait(2000)
        
        ProductCatalogue.selectColumbiaBrand()
        ProductCatalogue.veirfyNameOfProducts()
        
       
      
    })

    it('Should Filter products by largest to smallest prices', () =>{
      
       cy.SearchProduct('hanorac')

       ProductCatalogue.ClickFilterDrop("Cel mai mic pret")

       cy.wait(2000)

       ProductCatalogue.GetPriceTextProducts().then((actualPricesText) => {
        ProductCatalogue.verifyPriceOrderAscending(actualPricesText);
       })
    })

    it('Should filter products by yellow color', () =>{
       
        cy.SearchProduct('hanorac')

        ProductCatalogue.ClickColorFilter('yellow')
       
        cy.VerifyIncludesInUrl('yellow')

    })
    
    it('Should Filter product by multiple colors', () =>{
        
        cy.SearchProduct('hanorac')
        
        ProductCatalogue.ClickColorFilter('blue')

        ProductCatalogue.ClickColorFilter('yellow')

        cy.VerifyIncludesInUrl('yellow').and('include','blue')

    })
 })