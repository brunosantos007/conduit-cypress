/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Post Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.getComments,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const comments = response.body.comments

            if (comments.length >= 1) {
                const idComment = comments[0].id
                cy.request({
                    url: `${apiRoute.getComments}/${idComment}`,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })
                cy.request({
                    url: apiRoute.getComments,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        comment: {
                            body: "TesteIF"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })
            } else {
                cy.request({
                    url: apiRoute.getComments,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        comment: {
                            body: "TesteELSE"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })
            }
        })
    })
})
