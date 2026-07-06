// /// <reference types="cypress" />

// it('First Test', () => {

//     // cy.intercept('GET','**/tags', {fixture: 'tags.json'})
//     cy.intercept({method: 'GET', pathname: 'tags'}, {fixture: 'tags.json'})
//     cy.intercept('GET','**/articles*', {fixture: 'articles.json'})
//     cy.loginToApplication()
// });

// it('Modify Our Test Response', () => {
//     cy.intercept('GET','**/articles*', req => {
//         req.continue(res => {
//             res.body.articles[0].favoritesCount = 1
//             res.body.articles[0].title = 'Testando a Aplicacao'
//             res.send(res.body)
//         })
//     })
//     cy.loginToApplication()
//     cy.get('h1').first().should('contain.text', 'Testando a Aplicacao')
//     cy.get('app-favorite-button').first().should('contain.text', '1')
// });

// it('waiting for apis', () => {
//     cy.intercept('GET', '**/articles*').as('artcileApiCall')
//     cy.loginToApplication()
//     cy.wait('@artcileApiCall').then( apiArticleObject => {
//         expect(apiArticleObject.response.body.articles[0].title).to.contain('Bondar Academy')
//     })
//     cy.get('app-article-list').invoke('text').then( allArticleTexts => {
//         expect(allArticleTexts).to.contain('Bondar Academy')
//     })
// })