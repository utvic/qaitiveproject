/// <reference types="cypress"/>
const userCredentials = Cypress.env('userCredentials');

describe('',()=>{
  it('',()=>{
    cy.loginAPI('http://localhost:4200/').then(token =>{
      const articleData = {
        "title": "rmwmna",
        "description": "77",
        "body": "77",
        "tagList": ["57555"]
      }
    cy.request({
      method:'POST',
      url: 'https://api.realworld.io/api/articles/',
      headers: {
        'Authorization': 'Token ' +token,
        'Content-Type': 'application/json'
      },
      body:{article:articleData}
    }).then(response =>{
        console.log(response)
        const slug = response.body.article.slug
        console.log(slug)
      
        const putObject ={
        article: {
           "title": "dntammmaa",
           "description": "66",
           "body": "666",
           "tagList": ["666"]}
        }
        cy.request({
          method:'PUT',
          url: `https://api.realworld.io/api/articles/${slug}`, //slug se dodaje zbog urla PUT metode koji se menja
          headers: { 'Authorization': 'Token ' +token},
          body:putObject
        }).then(response=>{
          console.log(response)
         const slug2 =response.body.article.slug;
         console.log(slug2)

         cy.request({
          method:'DELETE',
           url: `https://api.realworld.io/api/articles/${slug2}`,
           headers: { 'Authorization': 'Token ' +token}
         })
        })
       
    })
   
  })
    

  })
})
describe('API test suite', () => {
  it.only('should create, update, and delete an article', () => {
    cy.loginAPI('http://localhost:4200/').then(token => {
      const articleData = {
        title: "nnnytyn",
        description: "77",
        body: "77",
        tagList: ["57555"]
      };

      
      cy.createArticle(token, articleData).then(slug => {
        const putObject = {
          article: {
            title: "mmmtyytmmm",
            description: "66",
            body: "666",
            tagList: ["666"]
          }
        };

        
        cy.updateArticle(token, slug, putObject).then(updatedSlug => {
          
          cy.deleteArticle(token, updatedSlug);
        });
      });
    });
  });
});
