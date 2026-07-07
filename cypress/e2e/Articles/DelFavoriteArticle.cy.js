/// <reference types="cypress" />

it('Delete Favorite Articles', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: '/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/favorite',
            method: 'DELETE',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})


