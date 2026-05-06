import { Page } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

    pimMenu =
        '//span[text()="PIM"]';

    userDropdown =
        '.oxd-userdropdown-tab';

    logoutBtn =
        '//a[text()="Logout"]';

    async openPIM() {

        await this.page.locator(this.pimMenu)
            .waitFor({ timeout: 30000 });

        await this.page.locator(this.pimMenu)
            .click();

        await this.page.waitForTimeout(3000);
    }

    async logout() {

        await this.page.locator(this.userDropdown)
            .waitFor({ timeout: 30000 });

        await this.page.locator(this.userDropdown)
            .click();

        await this.page.waitForTimeout(2000);

        await this.page.locator(this.logoutBtn)
            .waitFor({ timeout: 30000 });

        await this.page.locator(this.logoutBtn)
            .click();

        await this.page.waitForTimeout(3000);
    }
}