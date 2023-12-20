/// <reference types="Cypress" />

describe('Waiting strategies', () => {
  beforeEach(() => {
    cy.visit('/');
    
    cy.get('#ajaxButton').as('requestBtn');
  });

  it('Implicit wait', () => {
    cy.get('@requestBtn').click();
    cy.wait(18000);
    cy.get('#content > p').should('be.visible');
  });

  it('Explicit wait', () => {
    cy.get('@requestBtn').click();
    cy.get('#content > p', {timeout: 18000}).should('be.visible');
  });

  it.only('Intercepting wait', () => {
    cy.intercept({
      method: 'GET',
      url: '/*'
    }).as('request');

    cy.get('@requestBtn').click();
    cy.wait('@request', {timeout: 18000}).its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.get('#content > p').should('be.visible');
  });

  /* it.only('Intercepting wait', () => {
    cy.intercept({
      method: 'GET',
      url: '/*'
    }).as('request');

    cy.get('@requestBtn').click();
    cy.wait('@request', {timeout: 18000}).then((interception) => {
      expect(interception.response.statusCode).to.oneOf([200, 304]);
    });
    cy.get('#content > p').should('be.visible');
  }); */
});