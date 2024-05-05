
// describe('FashionDays main page', () => {
//     beforeEach(()=>{
//         cy.fixture('DataTest').then(function (data) {
//             this.data = data;
//             cy.visit(this.data.url);
//         })
//     })
// //     it('', function() {
// //       cy.visit("https://www.fashiondays.ro/customer/authentication");
// //       cy.contains("Ai uitat parola?").click()
// //       cy.get("input[placeholder='Te rugam sa introduci adresa de email.']").type("unusual-bit@wuvxtq9v.mailosaur.net")
// //       cy.contains("Trimite").click()
        
// //       cy.wait(9000);

// //       cy.mailosaurListMessages("wuvxtq9v")
// //       .then((result)=>{
// //         const email =result.items[0];
// //         expect(email.subject).to.equal("Reseteaza-ti parola Fashion Days");
// //         return cy.mailosaurGetMessageById(email.id);
// //       })
// //       .then((email)=>{
// //         cy.log(email.text.body)
// //         cy.log(`${email.html.links.length} links found in HTML content`);
// //         return cy.visit(email.html.links[1].href);

// //         // expect(email.text.body).to.contain("Ai cerut o noua parola pentru contul tau Fashion Days, noi ti-o schimbam!Apasa butonul de mai jos in urmatoarele 24 de ore, dupa va fi prea tarziu.");
// //       })
// //       let password = 'parola123'
// //       cy.get('#pizokel_customer_password_new_password_first').type(password)
// //       cy.get('#pizokel_customer_password_new_password_second').type(password)
// //       cy.get('#submit-change-password').click()

// //     })

// // })