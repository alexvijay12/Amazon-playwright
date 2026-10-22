import { test } from '@playwright/test';
import { loginpage } from '../pages/Loginpage';
import userData from '../testData/user.json' with { type: 'json' };

test('Example test', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.page.goto('https://www.saucedemo.com/');
    await loginPage.login(userData.standard_user.username, 
        userData.standard_user.password);
});