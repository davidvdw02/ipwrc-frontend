describe('Product Component', () => {
  it('should have the correct configuration', () => {
    cy.visit('/product');

    // Assert that the configuration is correct
    cy.get('.config').should('contain', 'Your configuration details');
  });

  it('should run successfully', () => {
    // Add your test logic here
    // For example, you can assert that a specific element exists on the page
    cy.get('.element').should('exist');
  });
});