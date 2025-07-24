class TestCasesPage {
  verifyTestCasesPageVisible() {
    cy.url().should("include", "/test_cases");
    cy.contains("Test Cases").should("be.visible");
  }
}

export default TestCasesPage;