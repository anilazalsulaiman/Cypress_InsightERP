// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// <reference types="Cypress" />

/// <reference types="cypress-xpath" /> 

Cypress.Commands.add('loginfunctionality', (username, password) => {
    cy.visit('login/index_old03/')
    cy.get("input[placeholder='IN1234']").type(username)
    cy.get("input[type='password']").type(password)
    cy.get("button[type='submit']").click()
    cy.wait(2000)
    cy.url().should('include', '/dashboard');
  });

// Hover over the Apps menu and click
Cypress.Commands.add('mouseHoverAndClick',(element)=>{
  cy.get(element).trigger('mouseover').click();
})

//XPATH
// checks the element visibility for xpath
Cypress.Commands.add('visibilityCheckXpath',(element)=>{
  cy.xpath(element).should('be.visible')
})

  
  
  