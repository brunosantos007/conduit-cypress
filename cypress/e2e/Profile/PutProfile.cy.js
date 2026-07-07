/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes";

it('Put Profile', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.putProfile,
            method: 'PUT',
            body: {
                user: {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUfVHdvudxIJcpsK9p2-D3x7D0hS76rGwmUwCiwH0dQ&s=10",
                    username: "",
                    bio: "The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
                    email: "MasterPiece@qqq.com",
                    password: "Welcome12345"
                }
            },
            headers: { Authorization: token}
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
});