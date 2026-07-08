/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Favorite Posts', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.getFavoritePosts(token).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.articles[0].favorited).to.equal(true)
            expect(response.body.articles[0].favoritesCount).to.be.a('number')
            expect(response.body.articlesCount).to.equal(1)
        })
    })
})