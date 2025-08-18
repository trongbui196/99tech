import {test,expect} from '@playwright/test'
import { SearchPage } from '../pages/searchPage';
import { LoginPage } from '../pages/loginPage';
import dotenv from "dotenv";
dotenv.config({quiet:true});

test.beforeEach(async ({page})=>{
   const login=new LoginPage(page);
   await login.goto();
   await login.login(process.env.user_Name!, process.env.user_Password!);
})
test.describe('Search',()=>{
test('search admin',async ({page})=>{
    const searchPage = new SearchPage(page);
    await searchPage.search('admin');
    const admin=page.getByRole('link',{name:'Admin'});
    expect(admin).toBeVisible();
})
test('search string not match item',async ({page})=>{
    const searchPage = new SearchPage(page);
    await searchPage.search('mip');
    const pim=page.getByRole('link',{name:'PIM'});
    expect(pim).not.toBeVisible();
})
test('empty the side bar',async ({page})=>{
    const searchPage = new SearchPage(page);
    await searchPage.search('none');
    const menu=page.locator(`ul.oxd-main-menu li:visible`)
   await expect(menu).toHaveCount(0);
    //  await expect(page.locator('ul.oxd-main-menu')).toBeEmpty();
})
})

