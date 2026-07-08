/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Delete Favorite Articles', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.delFavoriteArticles(token).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})