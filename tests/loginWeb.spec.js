const{test,expect} =require('@playwright/test')

test("Login to application",async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill("admin@email.com")
    await page.locator("//input[@id='password1']").fill("admin@123")
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@alt='menu']").click()
    await page.locator("//button[@class='nav-menu-item']").click()
    await expect(page).toHaveURL(/login/)
    
})