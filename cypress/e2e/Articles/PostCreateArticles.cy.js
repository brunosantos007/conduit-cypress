/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

describe('Create Articles', () => {
    it('Post Create Articles', function () {
        cy.loginToApplicationHeadless()
        cy.get('@accessToken').then(token => {
            cy.postCreateArticles(token)
        })
    })

    it.only('Create Articles - title cannot be blank', () => {
        cy.loginToApplicationHeadless()
        cy.get('@accessToken').then(token => {
            cy.request({
                url: apiRoute.createArticle,
                method: 'POST',
                headers: { Authorization: token },
                failOnStatusCode: false,
                body: {
                    article: {
                        title: "",
                        description: "",
                        body: "",
                        tagList: [""]
                    }
                }
            }).then(response => {
                expect(response.status).to.equal(422)
            })
        })
    });
})

