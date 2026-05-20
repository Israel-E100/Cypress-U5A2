describe('EjemploU5A2', () => {

  it('AbrirPagina', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })

})