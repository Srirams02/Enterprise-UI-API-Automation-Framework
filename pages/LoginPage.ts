import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    username =
        'input[name="username"]';

    password =
        'input[name="password"]';

    loginBtn =
        'button[type="submit"]';

    async gotoLoginPage() {

        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            {
                waitUntil: 'networkidle'
            }
        );
    }

    async login(user: string, pass: string) {

        await this.page.locator(this.username)
            .waitFor({ timeout: 60000 });

        await this.page.locator(this.username)
            .fill(user);

        await this.page.locator(this.password)
            .fill(pass);

        await this.page.locator(this.loginBtn)
            .click();

        await this.page.waitForLoadState('networkidle');
    }
}