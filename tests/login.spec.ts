import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import dotenv from "dotenv";
dotenv.config({quiet:true});
test('Login', async ({ page }) => {
    const username = process.env.user_Name!;
    const pass = process.env.user_Password!;
    if(!username || !pass) {
        throw new Error('Missing username or password');
    }
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, pass);
    await expect(page).toHaveURL(`web/index.php/dashboard/index`);
})
test('Login w empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginButton.click();
    await expect(page.getByText('Required')).toHaveCount(2); 
    await expect(page).toHaveURL(`web/index.php/auth/login`);
})
test('Login w incorrect credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('trongbui123', '123123');
    await expect(page.getByText("Invalid credentials")).toBeVisible();
    await expect(page).toHaveURL(`web/index.php/auth/login`);
   
})