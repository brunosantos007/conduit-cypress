/// <reference types="cypress" />

it('Delete Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments',
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const comments = response.body.comments
            if (comments.length >= 1) {
                const idComment = comments[0].id
                cy.request({
                    url: `https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments/${idComment}`,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })

            } else {
                cy.request({
                    url: `https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments`,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        comment: {
                            body: "TesteELSE"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.equal(200)
                    const createdId = response.body.comment.id
                    cy.request({
                        url: `https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments/${createdId}`,
                        method: 'DELETE',
                        headers: { Authorization: token }
                    }).then(response => {
                        expect(response.status).to.equal(200)
                    })
                })
            }
        })
    })
})
