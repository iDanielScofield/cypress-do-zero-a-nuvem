describe('Central de Atendimento ao Cliente TAT - Política de Privacidade', () => {
    beforeEach(() => {
        cy.visit('./src/privacy.html')
    })

    it('testa a página da política de privacidade de forma independente', () => {
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    })
})
