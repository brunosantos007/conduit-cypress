/// <reference types="cypress" />

    let commentId;

    beforeEach(() => {
        cy.intercept('GET', '**/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments', { fixture: 'GetComments.json' }).as('getComments')
        cy.loginToApplication()
        cy.wait(500)
        cy.get('.preview-link').first().click()
    })

    it('Delete Comment', () => {
        cy.request({
            method: 'DELETE',
            url: `/api/comments/${commentId}`,
            headers: {
                Authorization: `Token ${window.localStorage.getItem('jwt')}`
            }
        }).then((deleteRes) => {
            expect(deleteRes.status).to.eq(200)
        })
    })