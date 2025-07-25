class CartPage {
  verifyProductsInCart(expectedCount) {
    cy.get('.cart_info .cart_product').should('have.length', expectedCount);
  }

  verifyPricesQuantitiesAndTotal() {
    cy.get('.cart_info tbody tr').each(($row) => {
      cy.wrap($row).find('.cart_price').should('be.visible');
      cy.wrap($row).find('.cart_quantity').should('be.visible');
      cy.wrap($row).find('.cart_total').should('be.visible');
    });
    // Optionally, add more detailed checks for price/quantity/total math here
  }

  verifyProductQuantity(expectedQuantity) {
    cy.get('.cart_quantity button').should('have.text', expectedQuantity.toString());
  }

  verifyCartPageVisible() {
    cy.contains("Shopping Cart").should("be.visible");
  }

  clickProceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  clickRegisterLogin() {
    cy.get('a').contains("Register / Login").click();
  }
}

export default CartPage;