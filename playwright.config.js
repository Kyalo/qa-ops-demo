// playwright.config.js
const config = {
  testDir: './tests/e2e',
  timeout: 30 * 1000, // 30 seconds per test
  retries: 1, // Retry once on failure
  use: {
    baseURL: 'http://localhost:3000', // Your running app URL
    headless: true, // Run tests without opening browser UI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // Record video only on test failure
    screenshot: 'only-on-failure', // Take screenshot only on failure
  },
  reporter: [
    ['list'], // Console reporter
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // HTML report for detailed results
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
};

module.exports = config;
