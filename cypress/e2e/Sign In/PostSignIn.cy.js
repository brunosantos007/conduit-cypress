/// <reference types="cypress" />

it('Post Sign In', () => {
    cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/users/login',
            method: 'POST',
            body: {
                user: {
                    email: "MasterPiece@qqq.com",
                    password: "Welcome12345"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
})


