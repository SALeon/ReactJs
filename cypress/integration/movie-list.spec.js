describe('Movie list', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Display movie list on load', () => {
    // TODO: after add request/response MOVIE_API change it test with GET MOVIE_API
    cy.get('.movie-card').should('have.length', 40);
  });
});
