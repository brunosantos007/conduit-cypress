/// <reference types="cypress" />

it('Delete Articles', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/articles?author=bnm&limit=10&offset=0',
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const articles = response.body.articles
            if (articles.length >= 1) {
                const idComment = articles[0]
                cy.request({
                    url: `https://conduit-api.bondaracademy.com/api/articles/API-Automation-56855`,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(204)
                })

            } else {
                cy.request({
                    url: `https://conduit-api.bondaracademy.com/api/articles/`,
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
                        url: `https://conduit-api.bondaracademy.com/api/articles/API-Automation-56855`,
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
