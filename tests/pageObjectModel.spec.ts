import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutsPage } from '../page-objects/formLayoutsPage';
import { DatePickerPage } from '../page-objects/datePickerPage';
import {faker} from '@faker-js/faker'

import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
});

test('navigate to form page', async ({ page }) => {

    const pm = new PageManager(page)
    //const navigateTo = new NavigationPage(page);

    await pm.navigateTo().FormLayoutsPage();
    //await pm.navigateTo().datepickerPage();
    //await pm.navigateTo().smartTablePage();
    //await pm.navigateTo().toastrPage();
    //await pm.navigateTo().tooltipPage();
});

test('parametrized methods', async ({ page }) => {

     const pm = new PageManager(page)
     const randomFullName = faker.person.fullName()

    //const navigateTo = new NavigationPage(page);
    //const onFormLayoutsPage = new FormLayoutsPage(page);
    //const ondatepickerPage = new DatePickerPage(page);

    await pm.navigateTo().FormLayoutsPage();
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com','Welcome1','Option 2');
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName,'John@test.com',false);

    /*
    await pm.navigateTo().datepickerPage(); 
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(10)
    await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(3,6)
    */

});