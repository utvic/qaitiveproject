/// <reference types="cypress"/>
const userCredentials = Cypress.env('userCredentials');
const baseUrl = Cypress.config('baseUrl');
describe('Favorite Article', () =>  {
  it('Liking a post increases the number', () => {
    cy.login(`${baseUrl}/login`,userCredentials.email, userCredentials.password);
    cy.get(':nth-child(1) > .article-preview > app-article-meta > .article-meta > .pull-xs-right > .btn')
      .then(($numOfLikes =>{
        const currentLikes = parseInt($numOfLikes.text(),10);
        console.log(currentLikes);
        cy.get(':nth-child(1) > .article-preview > app-article-meta > .article-meta > .pull-xs-right > .btn').click();
        cy.get(':nth-child(1) > .article-preview > app-article-meta > .article-meta > .pull-xs-right > .btn').should(($numofLikesAfter)=>{
          const newLikes = parseInt($numofLikesAfter.text(),10);
          console.log(newLikes);
          expect(newLikes).to.eq(currentLikes+1);
        })
      }))

  }) 
})
describe('Favorite Article', () =>  {
  it('Liking a post puts it in your favorites list', () => {
    cy.login(`${baseUrl}/login`,userCredentials.email, userCredentials.password);
    cy.get(':nth-child(1) > .article-preview > app-article-meta > .article-meta > .pull-xs-right > .btn').click();
    cy.get(':nth-child(1) > .article-preview > .preview-link > h1')
      .then(($titleName)=>{
        const currentTitle = $titleName.text();
        console.log(currentTitle);

        cy.get(':nth-child(4) > .nav-link').click();
        cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link').click();
        cy.contains('h1',currentTitle);
      })
  }) 
})