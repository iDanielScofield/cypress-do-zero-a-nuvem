Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    openTextArea: 'Lorem Ipsum',
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.openTextArea, {delay: 0})
    cy.contains('button', 'Enviar').click()
})
