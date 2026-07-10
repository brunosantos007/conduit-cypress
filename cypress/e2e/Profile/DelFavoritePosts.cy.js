/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Delete Favorite Posts', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.deleteFavoritePosts(token).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.article.favorited).to.equal(false)
        })
    })
})