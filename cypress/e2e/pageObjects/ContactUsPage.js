class ContactUsPage {
  verifyGetInTouchVisible() {
    cy.contains("Get In Touch").should("be.visible");
  }

  enterContactDetails({ name, email, subject, message }) {
    cy.get('[data-qa="name"]').type(name);
    cy.get('[data-qa="email"]').type(email);
    cy.get('[data-qa="subject"]').type(subject);
    cy.get('[data-qa="message"]').type(message);
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').attachFile(filePath);
  }

  clickSubmit() {
    cy.get('[data-qa="submit-button"]').click();
  }

  clickOk() {
    cy.on('window:alert', (str) => {
      expect(str).to.match(/.*successfully.*/i);
    });
    // const button = cy.get('button').contains('Ok');
    // if (button) {
    //     button.click({ force: true }); // If there is an OK button
    // }
}

  verifySuccessMessage() {
    cy.contains("Success! Your details have been submitted successfully.").should("be.visible");
  }

  clickHome() {
    cy.get('a').contains('Home').click();
  }
}

export default ContactUsPage;