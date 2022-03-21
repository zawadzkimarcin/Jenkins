import {test, expect} from '@playwright/test'

    test.only('GoToPage', async({page})=>{
        await page.goto('https://playwright.dev/')
        await page.locator('text=Get started').click
})