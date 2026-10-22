# Flipkart Playwright Automation Framework

A simple Page Object Model (POM) framework using Playwright + JavaScript.

## Project Structure

```
flipkart-playwright/
├── tests/           # Test files (test steps + assertions only)
│   └── login.spec.js
├── pages/           # Page Object classes (locators + reusable actions)
│   ├── LoginPage.js
│   └── HomePage.js
├── test-data/        # Test data kept separate from test logic
│   └── testData.js
├── utils/           # Reusable helper functions
│   └── testUtils.js
├── playwright.config.js
├── package.json
└── README.md
```

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm test              # headless run
npm run test:headed   # see the browser
npm run test:debug    # step through with Playwright Inspector
```

## View HTML Report

```bash
npm run report
```

## Key Concepts

- **Page Object Model (POM):** all locators and element actions live in `pages/`. Test files never touch a raw locator directly.
- **Reusable methods:** e.g. `homePage.searchForProduct('iPhone')` instead of repeating `fill()` + `press()` in every test.
- **Screenshot & trace on failure:** configured in `playwright.config.js` — no extra code needed in tests.
- **Test data separation:** search terms and credentials live in `test-data/testData.js`, not hardcoded in tests.
