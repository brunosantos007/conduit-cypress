/// <reference types="cypress" />

it('Delete Unfollow Profile', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/profiles/Artem%20Bondar/follow',
            method: 'DELETE',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})


