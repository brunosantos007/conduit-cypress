/// <reference types="cypress" />

it('Delete Comments', () => {
    cy.request({
        url: 'https://conduit-api.bondaracademy.com/api/users/login',
        method: 'POST',
        body: {
            "user": {
                "email": "MasterPiece@qqq.com",
                "password": "Welcome12345"
            }
        }
    }).then(response => {
        expect(response.status).to.equal(200)
        const accessToken = 'Token ' + response.body.user.token

        cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments',
            method: 'GET',
            headers: {'Authorization': accessToken}
        }).then( response => {
            const comments = response.body.comments
            if (comments.length >= 1) {
                const idComment = comments[0].id

                cy.request({
                    url: `https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments/${idComment}`,
                    method: 'DELETE',
                    headers: {'Authorization': accessToken}
                }).then( response => {
                    expect(response.status).to.equal(200)
                })
            } else {
                 cy.request({
                     url: `https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments`,
                     method: 'POST',
                     headers: {'Authorization': accessToken},
                     body: {
                         "comment": {
                             "body": "TesteELSE"
                         }
                     }
                 }).then( response => {
                     expect(response.status).to.equal(200)
                 })
                 cy.request({
                    url: `https://conduit-api.bondaracademy.com/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments/${idComment}`,
                    method: 'DELETE',
                    headers: {'Authorization': accessToken}
                }).then( response => {
                    expect(response.status).to.equal(200)
                })
            }
            
        })
    })
});
