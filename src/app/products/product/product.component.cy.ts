import { ProductComponent } from './product.component';

describe('Product Component', () => {

  it('displays product name', () => {
    cy.visit('');
    cy.mount(ProductComponent)
    cy.get('.product-container h2').should('contain', 'mockProduct.name');
  });
});
