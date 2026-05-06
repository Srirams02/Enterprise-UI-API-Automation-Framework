import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  workers: 2,

  timeout: 180000,

  retries: 2,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 30000,

    navigationTimeout: 60000
  },

  projects: [

    {
      name: 'Chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Firefox',

      use: {

        ...devices['Desktop Firefox'],

        actionTimeout: 60000,

        navigationTimeout: 60000
      }
    },

    {
      name: 'Webkit',

      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
});