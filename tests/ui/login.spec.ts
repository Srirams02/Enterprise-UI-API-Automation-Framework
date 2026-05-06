import { test, expect } from '@playwright/test';

import { LoginPage }
from '../../pages/LoginPage';

import { DashboardPage }
from '../../pages/DashboardPage';

test('Logout Flow',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    const dashboardPage =
        new DashboardPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await page.waitForTimeout(5000);

    await dashboardPage.logout();

    await page.waitForTimeout(3000);

    await expect(page)
        .toHaveURL(/login/);
});