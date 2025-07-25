class CheckoutPage {
  verifyAddressDetails(user) {
    cy.contains(user.name).should("be.visible");
    cy.contains(user.address).should("be.visible");
    // Add more checks as needed
  }

  verifyOrderReview() {
    cy.contains("Review Your Order").should("be.visible");
  }

  enterComment(comment) {
    cy.get("textarea[name='message']").type(comment);
  }

  clickPlaceOrder() {
    cy.contains("Place Order").click();
  }
}

export default CheckoutPage;