import { Locator, Page } from "@playwright/test";
import{helperBase} from "./helperBase"

export class NavigationPage extends helperBase{

    //readonly page: Page
    /*readonly fromLayoutsMenuItem : Locator
    readonly datePickerManuItem : Locator
    readonly smartTableManuItem : Locator
    readonly toastrManuItem : Locator
    readonly tooltipManuItem : Locator*/

    //all locators are in the constructor
    constructor(page: Page){

        super(page)
        /*this.page = page
        this.fromLayoutsMenuItem = page.getByText('Form Layouts')
        this.datePickerManuItem = page.getByText('Datepicker')
        this.smartTableManuItem = page.getByText('Smart Table')
        this.toastrManuItem = page.getByText('Toastr')
        this.tooltipManuItem = page.getByText('Tooltip')*/

    }async FormLayoutsPage(){
        
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Forms').click()
        await this.waitforNumberofSeconds(2)
    
    }


    /*async FormLayoutsPage(){
        //await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        await this.fromLayoutsMenuItem.click()
    }

    async datepickerPage(){
        //await this.page.getByText('Forms').click();
        //await this.page.waitForTimeout(1000) //make wait the pages
        await this.selectGroupMenuItem('Forms')
        await this.datePickerManuItem.click();
    }

    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        //await this.page.getByText('Tables & Data').click()
        await this.smartTableManuItem.click()
    }

    async toastrPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        //await this.page.getByText('Modal & Overlays').click()
        await this.toastrManuItem.click()
    }

    async tooltipPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        //await this.page.getByText('Modal & Overlays').click()
        await this.tooltipManuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle:string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == "false")
            await groupMenuItem.click()

    }*/
}
