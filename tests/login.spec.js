const{test,expect} =require('@playwright/test')

test("Valid Login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveURL(/login/);
    await page.getByPlaceholder('Username').fill("Admin",{delay:200})
    await page.locator("input[name='password']").fill("admin123",{delay:200})
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText('profile picture').first().click()
    await page.getByText('Logout').click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/login/);
})