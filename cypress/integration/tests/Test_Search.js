import ProductCatalogue from "./PageObject/ProductCatalogue";

describe('FashionDays Search Functionality', () => {
    
    // Runs before each test
    beforeEach(()=> {    
        // Load data from the fixture file
        cy.fixture('DataTest').then(function(data) {
           this.data = data;
           cy.visit(Cypress.env("url"));

        });

    });
    it('Search for a product and check if results are returned', function(){
        //search for product
        cy.SearchProduct(this.data.ValidProduct[1])
        
        //verify if the results are returned nike 
        ProductCatalogue.VerifyNameOfProducts('Nike')
    });
    it('Search inexistent product', function()  {
        //search for product
        cy.SearchProduct(this.data.inexistent_product)
        // Wait for error message to appear and check its content
        cy.get('#fallback-top-container').then((element) => {
            const resultText = element.text().trim().replace(/\s+/g, ' ');
            const expected_result = `Ne pare rau, niciun rezultat gasit pentru: ${this.data.inexistent_product} Din fericire, poti regasi mai jos o selectie de articole din care sa-ti alegi favoritele!`;
            expect(resultText).to.equal(expected_result);
        });
    });
    it('Navigate between search result pages', function() {
        //search for product
        cy.SearchProduct(this.data.ValidProduct[0])
       
        // Click on page 2 from the search results
        
        ProductCatalogue.ClickPage2();
        
        // Verify if the URL contains the correct page

        cy.VerifyIncludesInUrl(`${this.data.ValidProduct[0]}&page=2`)
     
    });
});
