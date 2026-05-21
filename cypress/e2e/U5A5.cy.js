describe('U5A5', () => {
    it ('Automatización de un flujo completo', () => {
        //Entrar a la pagina Cypress
        cy.visit('https://example.cypress.io')
        //Abre la seccion command y despues entra a actions
        cy.contains('Commands').click()
        cy.contains('Actions').click()
        //Ingresar un correo en el campo correo y que asegure haberlo escrito
        cy.get('.action-email')
        .type('correo@ejemplo.com')
        .should('have.value', 'correo@ejemplo.com')
        //Selecciona 2 checkboxes, menos el 1 porque ta bloqueado.
        cy.get('.action-checkboxes [type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('.action-checkboxes [type="checkbox"]').eq(2).check().should('be.checked')
        //Para abrir la lista de las frutas
        cy.get('.action-radios [type="radio"]').first().check().should('be.checked')
        //Escoger la fruta naranjas y que se asegure de que se haya seleccionado
        cy.get('.action-select')
        .select('oranges')
        .should('have.value', 'fr-oranges')
        //Regresa y abre la seecion de cokmand y entra a traversal
        cy.get('.dropdown-toggle').contains('Commands').click()
        cy.contains('Traversal').click()
        //Valida el titulo
        cy.get('h1').should('contain', 'Traversal')
        //Para regresar al inicio
        cy.go('back')
        cy.go('back')
        //Verifica
        cy.contains('Kitchen Sink').should('be.visible')

    })
})