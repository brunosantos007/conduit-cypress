/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Get Tags', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.getPopularTags(token).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})