/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Post Favorite Posts', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.postFavoritePosts(token).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.article.favorited).to.equal(true)
        })
    })
})