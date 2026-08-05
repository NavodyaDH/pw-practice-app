import { test, expect, Page } from '@playwright/test'


export class PageManager{

    private readonly page : Page
    
    

    constructor(page: Page){
        
        this.page = page
        

}

async waitforNumberofSeconds(timeInseconds:number){
    await this.page.waitForTimeout(timeInseconds*1000)
}
}