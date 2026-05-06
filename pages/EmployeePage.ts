import { Page } from '@playwright/test';

export class EmployeePage {

    constructor(private page: Page) {}

    addEmployeeBtn =
        '//button[normalize-space()="Add"]';

    firstName =
        'input[name="firstName"]';

    lastName =
        'input[name="lastName"]';

    saveBtn =
        'button[type="submit"]';

    employeeSearch =
        '(//input[@placeholder="Type for hints..."])[1]';

    searchBtn =
        '//button[normalize-space()="Search"]';

    async clickAddEmployee() {

        await this.page.locator(this.addEmployeeBtn)
            .waitFor();

        await this.page.locator(this.addEmployeeBtn)
            .click();
    }

    async addEmployee(first: string, last: string) {

        await this.page.locator(this.firstName)
            .waitFor();

        await this.page.locator(this.firstName)
            .fill(first);

        await this.page.locator(this.lastName)
            .fill(last);

        await this.page.locator(this.saveBtn)
            .click();
    }

    async searchEmployee(employeeName: string) {

        await this.page.locator(this.employeeSearch)
            .waitFor();

        await this.page.locator(this.employeeSearch)
            .fill(employeeName);

        await this.page.waitForTimeout(2000);

        await this.page.locator(this.searchBtn)
            .click();
    }
}