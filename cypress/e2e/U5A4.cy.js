describe( 'U5A4', () => {
    it ('Interactuar', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('Commands').click()
        cy.contains('Actions').click()

        cy.get('.action-email')
        .type('correo@ejemplo.com')

        cy.get('.action-checkboxes [type="checkbox"]')
        .first()
        .check()

        cy.get('.action-radios [type="radio"]')
        .first()
        .check()

        cy.get('.action-select')
        .select('apples')

        cy.get('.action-btn').click()

        cy.get('.action-email')
        .should('have.value', 'correo@ejemplo.com')

        cy.get('.action-select')
        .should('have.value', 'fr-apples')
    })
})