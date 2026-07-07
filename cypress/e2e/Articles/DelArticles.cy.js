/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Delete Articles', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.getArticles,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const articles = response.body.articles
            if (articles.length >= 1) {
                const idComment = articles[0]
                cy.request({
                    url: apiRoute.deleteArticle,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(204)
                })

            } else {
                cy.request({
                    url: apiRoute.postCreateArticles,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        article: {
                            title: "API Automation",
                            description: "API",
                            body: "The Api should be automated every single time? Well, we will discover reading this article here",
                            tagList: [
                                "@api @call @automation"
                            ]
                    }
            }
                }).then(response => {
                    expect(response.status).to.equal(201)
                    cy.request({
                        url: apiRoute.deleteArticle,
                        method: 'DELETE',
                        headers: { Authorization: token }
                    }).then(response => {
                        expect(response.status).to.equal(204)
                    })
                })
            }
        })
    })
})
