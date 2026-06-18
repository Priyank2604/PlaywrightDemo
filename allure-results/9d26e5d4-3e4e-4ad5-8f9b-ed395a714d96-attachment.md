# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Valid Login
- Location: tests\login.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const{test,expect} =require('@playwright/test')
  2  | 
  3  | test("Valid Login", async function({page}){
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  5  |     
  6  |     await expect(page).toHaveURL(/login/);
  7  |     await page.getByPlaceholder('Username').fill("Admin",{delay:200})
  8  |     await page.locator("input[name='password']").fill("admin123",{delay:200})
  9  |     await page.locator("//button[normalize-space()='Login']").click()
  10 |     // await page.waitForTimeout(3000)
  11 |     await page.waitForURL('**/dashboard/**', {
  12 |     timeout: 15000
  13 | });
  14 |     await expect(page).toHaveURL(/dashboard/)
  15 |     await page.getByAltText('profile picture').first().click()
  16 |     await page.getByText('Logout').click()
> 17 |     await page.waitForTimeout(3000)
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  18 |     await expect(page).toHaveURL(/login/);
  19 | })
```