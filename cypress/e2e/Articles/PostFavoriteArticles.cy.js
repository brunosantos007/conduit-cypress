/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Post Favorite Articles', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.postFavoriteArticles(token).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.article.favorited).to.equal(true)
        })
    })
})