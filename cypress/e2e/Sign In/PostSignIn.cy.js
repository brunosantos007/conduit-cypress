/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Post Sign In', () => {
    cy.request({
            url: apiRoute.postSignIn,
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


