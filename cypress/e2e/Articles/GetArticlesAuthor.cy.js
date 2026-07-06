/// <reference types="cypress" />

it('Get Articles Author', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/articles?author=MasterPiece&limit=10&offset=0',
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})


