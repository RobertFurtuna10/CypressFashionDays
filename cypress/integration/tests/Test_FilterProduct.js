describe('FashionDays Search Functionality', () => {
    
    beforeEach(()=>{
        cy.visit('https://www.fashiondays.ro/')
    })



    it("Filter product by brand", () => {
        
        cy.SearchProduct('Tricou')
        
        cy.get('#brandOpt_20743 > .filter-link > .ui-left').as('ColumbiaBrand')
        
        // Introducem textul 'tricou' în căutare și apăsăm Enter
        
        cy.get('@ColumbiaBrand').click({force: true})
        
       
        cy.get('.product-card-brand').should('contain', 'Columbia')
      
    })

    it('Filter products by largest to smallest prices', () =>{
     
        
        cy.SearchProduct('hanorac')
        
        cy.get('.filterDrop').click()
       
        cy.get('label[value="lowest_price"]').click()
        
        
        const prices = []
        
        cy.wait(2000)


        cy.get('.sale-wrapper').each(($el) => {
            const productPrice = $el.text()
            const formatPrice = parseInt(productPrice.replace('lei', '').trim())
            prices.push(formatPrice)
        }).then(()=>{
            for (let i = 0; i < prices.length-1; i++) {
                expect(prices[i]).to.be.at.most(prices[i + 1]); // Verificăm fiecare element cu următorul
            }
        })
    })

    it('Filter product by yellow color', () =>{
       
        cy.SearchProduct('hanorac')
       
        cy.get('[data-gtm-name="YELLOW"]').click({force: true})
       
        cy.VerifyIncludesInUrl('yellow')


    })
    it('Filter product by multiple colors', () =>{
        
        cy.SearchProduct('hanorac')
        
        cy.get('[data-gtm-name="YELLOW"]').click({force: true})
        
        cy.get('[data-gtm-name="BLUE"]').click({force: true})

        cy.VerifyIncludesInUrl('yellow').and('include','blue')

    })
 })