class ProductsPage {
  verifyAllProductsPageVisible() {
    cy.url().should("include", "/products");
    cy.contains("All Products").should("be.visible");
  }

  verifyProductsListVisible() {
    cy.get('.features_items .product-image-wrapper').should("have.length.greaterThan", 0);
  }

  clickViewFirstProduct() {
    cy.get('.features_items .product-image-wrapper').first().contains("View Product").click();
  }
}

export default ProductsPage;