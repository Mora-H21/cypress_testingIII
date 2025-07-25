class ProductDetailPage {
  verifyProductDetailPageVisible() {
    cy.url().should("include", "/product_details");
    // cy.contains("Product Details").should("be.visible");
  }

  verifyProductDetails() {
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); // product name
      cy.contains('Category').should('be.visible');
      cy.contains('Rs.').should('be.visible');
      cy.contains('Availability').should('be.visible');
      cy.contains('Condition').should('be.visible');
      cy.contains('Brand').should('be.visible');
    });
  }

  setQuantity(quantity) {
    cy.get('input[name="quantity"]').clear().type(quantity);
  }

  clickAddToCart() {
    cy.contains("Add to cart").click();
  }

  clickViewCart() {
    cy.contains("View Cart").click();
  }
}

export default ProductDetailPage;