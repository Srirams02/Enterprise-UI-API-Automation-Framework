import { test, expect } from '@playwright/test';

import { LoginPage }
from '../../pages/LoginPage';

import { DashboardPage }
from '../../pages/DashboardPage';

import { EmployeePage }
from '../../pages/EmployeePage';

test('Search Employee Flow',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    const dashboardPage =
        new DashboardPage(page);

    const employeePage =
        new EmployeePage(page);

    // LOGIN

    await loginPage.gotoLoginPage();

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await page.waitForTimeout(5000);

    // OPEN PIM

    await dashboardPage.openPIM();

    await page.waitForTimeout(5000);

    // SEARCH EMPLOYEE

    await employeePage.searchEmployee(
        'Linda'
    );

    await page.waitForTimeout(5000);

    // VALIDATION

    await expect(
        page.locator('body')
    ).toContainText('Employee Information');
});