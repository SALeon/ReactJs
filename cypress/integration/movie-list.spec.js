describe('Movie list', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Display movie list on load', () => {
    // TODO: after add request/response API change it test with GET API
    cy.get('.movie-card').should('have.length', 40);
  });
});
