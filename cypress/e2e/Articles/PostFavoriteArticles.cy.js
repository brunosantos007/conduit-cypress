/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Post Favorite Articles', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.postFavoriteArticles,
            method: 'POST',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})


