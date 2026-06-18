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
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Test source

```ts
  1  | const{test,expect} =require('@playwright/test')
  2  | 
  3  | test("Valid Login", async function({page}){
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  5  |      await page.waitForURL(/login/, {
  6  |     timeout: 15000
  7  | });
  8  |     
  9  |     await expect(page).toHaveURL(/login/);
  10 |     await page.getByPlaceholder('Username').fill("Admin",{delay:200})
  11 |     await page.locator("input[name='password']").fill("admin123",{delay:200})
  12 |     await page.locator("//button[normalize-space()='Login']").click()
  13 |     // await page.waitForTimeout(3000)
> 14 |     await page.waitForURL(/dashboard/, {
     |                ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  15 |     timeout: 15000
  16 | });
  17 |     await expect(page).toHaveURL(/dashboard/)
  18 |     await page.getByAltText('profile picture').first().click()
  19 |     await page.getByText('Logout').click()
  20 |     await page.waitForURL(/login/);
  21 |     // await page.waitForTimeout(3000)
  22 |     await expect(page).toHaveURL(/login/);
  23 | })
```