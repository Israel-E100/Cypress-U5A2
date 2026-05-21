describe('U5A3', () => {
  it('Automatizar Acciones Rapidas', () => {
    
    cy.visit('https://example.cypress.io');

    cy.contains('type').click(); 

    cy.get('#email1').type('prueba@cypress.com');

    cy.get('.navbar-nav').contains('Commands').click();

    cy.contains('Actions').should('be.visible');
  });
});