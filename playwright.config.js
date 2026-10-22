const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Folder where all test files live
  testDir: './tests',

  // Timeout for each individual test (30 seconds)
  timeout: 30000,

  // Run tests one after another (set true if you want parallel execution)
  fullyParallel: false,

  // Generates a clean HTML report after every run
  reporter: [['html', { open: 'never' }]],

  use: {
    // Base URL so tests can use page.goto('/') instead of full URL every time
    baseURL: 'https://www.flipkart.com',

    // Take a screenshot ONLY when a test fails
    screenshot: 'only-on-failure',

    // Record a trace ONLY when a test fails (helps debugging step-by-step)
    trace: 'retain-on-failure',

    // Run in headed mode = false by default (CI-friendly); override with --headed flag
    headless: true,
  },

  // Only Chrome, as requested — no Firefox/Safari projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
