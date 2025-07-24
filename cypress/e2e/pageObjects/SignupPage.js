class SignupPage {
  selectTitle(title = "Mr") {
    if (title === "Mr") {
      cy.get("#id_gender1").check();
    } else {
      cy.get("#id_gender2").check();
    }
  }
  enterPassword(password) {
    cy.get('[data-qa="password"]').type(password);
  }
  selectDateOfBirth(day, month, year) {
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select(year);
  }
  fillAddress({
    firstName,
    lastName,
    company,
    address,
    country,
    state,
    city,
    zipcode,
    mobile,
  }) {
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobile);
  }
  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click();
  }
  verifyEnterAccountInfoVisible() {
    cy.contains("Enter Account Information").should("be.visible");
  }
  selectNewsletter() {
    cy.get("#newsletter").check();
  }
  selectOffers() {
    cy.get("#optin").check();
  }
}

export default SignupPage;
