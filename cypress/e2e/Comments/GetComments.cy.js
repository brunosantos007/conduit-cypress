/// <reference types="cypress" />

it('Get Comments', () => {
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
            expect(response.status).to.equal(200)
        })
    })

    
});
