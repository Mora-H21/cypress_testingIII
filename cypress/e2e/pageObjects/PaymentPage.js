class PaymentPage {
  enterPaymentDetails({ name, cardNumber, cvc, expiryMonth, expiryYear }) {
    cy.get('[name="name_on_card"]').type(name);
    cy.get('[name="card_number"]').type(cardNumber);
    cy.get('[name="cvc"]').type(cvc);
    cy.get('[name="expiry_month"]').type(expiryMonth);
    cy.get('[name="expiry_year"]').type(expiryYear);
  }

  clickPayAndConfirmOrder() {
    cy.contains("Pay and Confirm Order").click();
  }

  verifyOrderSuccess() {
    cy.contains("Your order has been confirmed").should("be.visible");
  }
}

export default PaymentPage;