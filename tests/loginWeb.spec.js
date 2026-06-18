const{test,expect} =require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))

test("Login to application",async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill(testdata.username)
    await page.locator("//input[@id='password1']").fill(testdata.password)
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@alt='menu']").click()
    await page.locator("//button[@class='nav-menu-item']").click()
    await expect(page).toHaveURL(/login/)
    
})