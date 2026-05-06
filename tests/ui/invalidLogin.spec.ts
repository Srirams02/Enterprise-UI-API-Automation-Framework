import { test, expect } from '@playwright/test';

import { LoginPage }
from '../../pages/LoginPage';

test('OrangeHRM Invalid Login',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        'wrongUser',
        'wrongPass'
    );

    await page.waitForTimeout(3000);

    await expect(page.locator('body'))
        .toContainText('Invalid credentials');
});