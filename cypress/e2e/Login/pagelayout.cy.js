/// <reference types="cypress"/>
const baseUrl = Cypress.config('baseUrl');
import { loginElements } from "../../support/POM/LoginPage/loginPageElements";
beforeEach('Login page', () =>{
  cy.visit(`${baseUrl}/login`);
})
describe('Test page layout',()=>{
  it('Header css test', ()=>{
    const navigationItems = ['Home', 'Sign in', 'Sign up'];
    navigationItems.forEach(item =>{
      cy.get(`li:contains(${item})`)
        .should('be.visible')
        .and('have.css','color','rgb(55, 58, 60)')
        .and('have.css', 'font-family', '"source sans pro", sans-serif')
    }) 
  })
  it('Body css test',()=>{
    cy.contains('h1','Sign in')
      .and('have.css','color','rgb(55, 58, 60)')
      .and('have.css', 'font-family', '"source sans pro", sans-serif');
    
    cy.contains('Need an account?')
      .should('have.attr', 'href', '/register')
      .and('have.css','color','rgb(92, 184, 92)')
      .and('have.css', 'font-family', '"source sans pro", sans-serif');

    cy.get(loginElements.email)
      .should('have.attr', 'placeholder', 'Email');

    cy.get(loginElements.password)
      .should('have.attr', 'placeholder', 'Password');
    
    cy.get('button.btn.btn-lg.btn-primary') 
      .should('have.css', 'background-color', 'rgb(92, 184, 92)') 
      .and('have.css', 'color', 'rgb(255, 255, 255)') 
      .and('have.text', ' Sign in ');
  })
  it('Footer css test', ()=>{
    cy.get('footer') 
      .should('have.css', 'color', 'rgb(55, 58, 60)')
      .and('contain', 'conduit') 
      .and('contain', '© 2024. An interactive learning project from'); 

  })
})