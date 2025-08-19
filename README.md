## Framework Structure and Rationale

- **`.github/workflows/playwright.yml`**:  For CICD
- **`pages/`**: Page object model for pages: Login - `loginPage.ts` and Search -`searchPage.ts` define methods and locators for interacting with the pages.
- **`tests/`**: Test scripts for features
- **`playwright.config.ts`**: Configuration file with run settings, test directory, and retries
- **`playwright-report/`**: Stores the HTML reports generated after test execution
- **`test-results/`**: Trace files and artifacts for debugging failed tests
This project structure organizes Playwright tests in a clear way: pages/ holds reusable page objects with locators and methods, tests/ contains the actual test cases for each feature, playwright.config.ts defines test settings, and the playwright-report/ plus test-results/ folders store reports and debugging artifacts from test runs.

## Steps to Execute the Demo Scripts

### Local Environment

1. **Clone the repo**:
   Run the following command to clone the project from my repo:
   - git clone https://github.com/trongbui196/99tech.git  

2. **Install the dependencies**:
   To install:
   - npm  i  
   - npx playwright install --with-deps

3. **Set Environment Variables**:
   - BASEURL=https://opensource-demo.orangehrmlive.com/
   - user_Name=Admin
   - user_Password=admin123

2. **Run Tests**:
   Execute the Playwright tests using the following command:
   - npx playwright test

3. **View Reports**:
   After the tests complete, view the HTML report:
   - npx playwright show-report


### Execution on GitHub Actions (CI/CD)

1. **GitHub Actions Workflow**:
   The repository includes a pre-configured GitHub Actions workflow file located at `.github/workflows/playwright.yml`. This workflow automatically runs the Playwright tests on every push or pull request to the `main` branch.

2. **Triggering the Workflow**:
   Push your changes to the repository or create a pull request. The workflow will execute the tests in a CI environment.

3. **View Results**:
   Navigate to the "Actions" tab in your GitHub repository to view the workflow runs. You can access the test results and logs from there.

---


