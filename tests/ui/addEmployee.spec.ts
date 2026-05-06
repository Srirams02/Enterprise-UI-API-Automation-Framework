import { test, expect } from '@playwright/test';

import { LoginPage }
from '../../pages/LoginPage';

import { DashboardPage }
from '../../pages/DashboardPage';

import { EmployeePage }
from '../../pages/EmployeePage';

test('Add Employee Flow',
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

    // CLICK ADD EMPLOYEE

    await employeePage.clickAddEmployee();

    await page.waitForTimeout(3000);

    // ADD EMPLOYEE

    await employeePage.addEmployee(
        'Sriram',
        'Playwright'
    );

    // EXTRA STABILITY WAIT

    await page.waitForTimeout(15000);

    // VALIDATION

    await expect(
        page.locator('body')
    ).toContainText('Personal Details');
});