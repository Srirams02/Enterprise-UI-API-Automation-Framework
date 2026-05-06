import { test, expect } from '@playwright/test';

import { LoginPage }
from '../../pages/LoginPage';

import { DashboardPage }
from '../../pages/DashboardPage';

import { EmployeePage }
from '../../pages/EmployeePage';

test('Enterprise E2E Employee Workflow',
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

    // ADD EMPLOYEE

    await employeePage.clickAddEmployee();

    await page.waitForTimeout(3000);

    await employeePage.addEmployee(
        'Sriram',
        'Automation'
    );

    // EXTRA STABILITY WAIT

    await page.waitForTimeout(15000);

    // VALIDATE EMPLOYEE PAGE

    await expect(
        page.locator('body')
    ).toContainText('Personal Details');

    // BACK TO PIM

    await dashboardPage.openPIM();

    await page.waitForTimeout(5000);

    // SEARCH EMPLOYEE

    await employeePage.searchEmployee(
        'Sriram'
    );

    await page.waitForTimeout(5000);

    // FINAL VALIDATION

    await expect(
        page.locator('body')
    ).toContainText('Employee Information');
});