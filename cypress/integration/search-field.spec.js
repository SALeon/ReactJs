describe('SearchField component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Focuses the input on load', () => {
    cy.focused().should('have.class', 'search-field filter__input');
  });

  it('Accept input', () => {
    const mockTyping = 'Harry';
    cy.get('.search-field')
      .type(mockTyping)
      .should('have.value', mockTyping);
  });
});
