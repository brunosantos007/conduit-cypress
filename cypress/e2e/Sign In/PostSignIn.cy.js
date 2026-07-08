/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Post Sign In', () => {
    cy.postSignIn().then(response => {
            expect(response.status).to.equal(200)
        })
})