import { Page } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config({quiet:true});

export class LoginPage{
  
    private page: Page
    public loginButton
    private userInput
    private passInput
    constructor(page: Page) {
    this.page = page; 
    this.loginButton=this.page.locator('button[type="submit"]')
    this.userInput= this.page.locator('input[placeholder="Username"]')
    this.passInput=this.page.locator('input[name="password"]')
  }
   
  
    async goto(){
        await this.page.goto(`web/index.php/auth/login`);
      //await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async login(username: string, password: string){
   
     await this.userInput.fill(username)
     await this.passInput.fill(password)
   await this.loginButton.click()
    }
}