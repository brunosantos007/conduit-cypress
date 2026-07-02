/// <reference types="cypress" />

beforeEach(() => {
    cy.loginToApplication()
    cy.wait(1000)
    cy.get('.preview-link').first().click()
    
})

it('Teste de GET - pegar ID', () => {
    cy.wait(5000)
    cy.request("GET", 
"https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments")
  .then((res) => {
      cy.log(JSON.stringify(res.body, null, 2))
  })


})
