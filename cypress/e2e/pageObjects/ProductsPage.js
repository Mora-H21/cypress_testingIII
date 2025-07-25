class ProductsPage {
  verifyAllProductsPageVisible() {
    cy.url().should("include", "/products");
    cy.contains("All Products").should("be.visible");
  }

  verifyProductsListVisible() {
    cy.get('.features_items .product-image-wrapper').should("have.length.greaterThan", 0);
  }

  clickViewFirstProduct() {
    cy.get('.product-image-wrapper').first().contains("View Product").click();
  }

  searchProduct(productName) {
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();
  }

  verifySearchedProductsVisible() {
    cy.contains("Searched Products").should("be.visible");
  }

  verifySearchResults(productName) {
    // Only check products under the "Searched Products" section
    cy.contains("Searched Products")
      .parent()
      .find('.product-image-wrapper')
      .each(($el) => {
        cy.wrap($el)
          .find('.productinfo p') // Adjust selector to the product name element
          .invoke('text')
          .then((text) => {
            // Normalize text by removing hyphens and spaces for comparison
            const normalizedText = text.toLowerCase().replace(/[-\s]/g, '');
            const normalizedProductName = productName.toLowerCase().replace(/[-\s]/g, '');
            expect(normalizedText).to.include(normalizedProductName);
          });
      });
  }

  hoverAndAddToCart(index) {
    cy.get('.product-image-wrapper').eq(index).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(index).contains('Add to cart').click({ force: true });
  }

  clickContinueShopping() {
    cy.contains('Continue Shopping').click();
  }

  clickViewCart() {
    cy.contains('View Cart').click();
  }

  verifyCategoriesSidebarVisible() {
    cy.get('.left-sidebar').should('be.visible');
    cy.contains('Category').should('be.visible');
  }

  clickMainCategory(categoryName) {
    cy.get('.panel-group.category-products').contains(categoryName).click();
  }

  clickSubCategory(mainCategory, subCategory) {
    cy.get(`#${mainCategory}`).find('a').contains(subCategory).click();
  }

  verifyCategoryPageVisible(expectedText) {
    cy.get('.features_items').should('be.visible');
    cy.contains(expectedText).should('be.visible');
  }

  verifyBrandsSidebarVisible() {
    cy.get('.brands_products').should('be.visible');
    cy.contains('Brands').should('be.visible');
  }

  clickBrand(brandName) {
    cy.get('.brands_products').find('a').contains(brandName).click();
  }

  verifyBrandPageVisible(brandName) {
    cy.get('.features_items').should('be.visible');
    cy.contains(`${brandName} Products`).should('be.visible');
  }

  addAllSearchedProductsToCart() {
    cy.contains('Searched Products')
      .parent()
      .find('.product-image-wrapper')
      .each(($el, index, $list) => {
        cy.wrap($el).trigger('mouseover');
        cy.wrap($el).contains('Add to cart').click({ force: true });
        // If not the last product, click Continue Shopping
        if (index < $list.length - 1) {
          cy.contains('Continue Shopping').click();
        }
      });
  }
}

export default ProductsPage;