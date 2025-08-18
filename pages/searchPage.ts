import { Page } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config({quiet:true});
export class SearchPage {
    page:Page;
    private searchInput
    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.locator('input[placeholder="Search"]');
    }
    async goto() {
        await this.page.goto('')
    }
    async search(query: string) {
        //fill locator with string
       // extract menu data
       await this.searchInput.fill(query);
    }
}