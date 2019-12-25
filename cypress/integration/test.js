describe('test', function() {
    it('test', function() {
      cy.visit('http://localhost:8083')
      cy.get('#date').clear().type('2018-12-12');
      cy.get('#button').click();
      cy.get('table').find('tr').its('length').should('eq', 7);
    })

    it('test', function() {
      cy.visit('http://localhost:8083')
      cy.get('#date').clear().type('2019-12-20');
      cy.get('#button').click();
      cy.get('.now').contains(20).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    })
  })