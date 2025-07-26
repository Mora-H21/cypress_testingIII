# Cypress Testing Project

This project contains automated tests for the Automation Exercise website using Cypress with Cucumber BDD.

## Prerequisites

- Node.js (version 18 or higher)
- npm

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Local Development

1. **Open Cypress Test Runner (Interactive Mode):**
   ```bash
   npm run test:open
   ```

2. **Run Tests Headlessly:**
   ```bash
   npm run test:headless
   ```

3. **Run Specific Test:**
   ```bash
   npm run test:spec "cypress/e2e/features/login_user.feature"
   ```

### Available Scripts

- `npm test` - Run all tests headlessly
- `npm run test:headless` - Run tests in headless mode
- `npm run test:open` - Open Cypress Test Runner
- `npm run test:spec` - Run specific test file
- `npm run test:record` - Run tests with recording (requires Cypress Cloud)

## GitHub Actions

The project includes GitHub Actions workflows that automatically run tests on:

- **Push** to `main` or `develop` branches
- **Pull Requests** to `main` or `develop` branches

### Workflow Features

1. **Single Run Job**: Runs all tests sequentially
2. **Parallel Run Job**: Runs tests in parallel across 4 containers for faster execution
3. **Artifacts**: Automatically uploads screenshots (on failure) and videos (always)
4. **Wait Strategy**: Waits for the target website to be available before running tests

### Workflow Files

- `.github/workflows/cypress-tests.yml` - Main workflow for running Cypress tests

## Test Structure

```
cypress/
├── e2e/
│   ├── features/           # Cucumber feature files
│   ├── step_definitions/   # Step definition files
│   └── pageObjects/        # Page Object Model classes
├── fixtures/               # Test data
├── screenshots/            # Screenshots (on failure)
└── videos/                 # Test recordings
```

## Test Cases

The project includes the following test cases:

1. **Test Case 1**: Register User
2. **Test Case 2**: Login User
3. **Test Case 3**: Login User with incorrect email and password
4. **Test Case 4**: Logout User
5. **Test Case 5**: Register User with existing email
6. **Test Case 6**: Contact Us Form
7. **Test Case 7**: Verify Test Cases Page
8. **Test Case 8**: Verify All Products and product detail page
9. **Test Case 9**: Search Product
10. **Test Case 10**: Verify Subscription in home page
11. **Test Case 11**: Verify Subscription in Cart page
12. **Test Case 12**: Add Products in Cart
13. **Test Case 13**: Verify Product quantity in Cart
14. **Test Case 14**: Place Order: Register while Checkout
15. **Test Case 15**: Place Order: Register before Checkout
16. **Test Case 16**: Place Order: Login before Checkout
17. **Test Case 17**: Remove Products From Cart
18. **Test Case 18**: View Category Products
19. **Test Case 19**: View & Cart Brand Products
20. **Test Case 20**: Search Products and Verify Cart After Login

## Configuration

- **Base URL**: https://www.automationexercise.com
- **Browser**: Chrome (headless in CI)
- **Framework**: Cypress with Cucumber BDD
- **Pattern**: Page Object Model

## Troubleshooting

### Common Issues

1. **Tests failing in CI but passing locally**: Check if the target website is accessible and stable
2. **Timeout issues**: Increase timeout values in `cypress.config.js`
3. **Element not found**: Verify selectors and ensure the website structure hasn't changed

### Debugging

- Check the uploaded artifacts (screenshots/videos) in GitHub Actions
- Review the workflow logs for detailed error information
- Use `cy.wait()` or `cy.intercept()` for flaky tests

## Contributing

1. Create a feature branch
2. Add your tests following the existing patterns
3. Ensure all tests pass locally
4. Submit a pull request

The GitHub Actions workflow will automatically run tests on your PR. 