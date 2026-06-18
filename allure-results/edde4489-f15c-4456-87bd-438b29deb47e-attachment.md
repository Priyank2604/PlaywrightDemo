# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Valid Login
- Location: tests\login.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  ""
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...

```

# Test source

```ts
  1  | const{test,expect} =require('@playwright/test')
  2  | 
  3  | test("Valid Login", async function({page}){
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  5  |     await expect(page).toHaveURL(/login/);
  6  |     await page.getByPlaceholder('Username').fill("Admin",{delay:200})
  7  |     await page.locator("input[name='password']").fill("admin123",{delay:200})
  8  |     await page.locator("//button[normalize-space()='Login']").click()
  9  |     await page.waitForTimeout(3000)
> 10 |     await expect(page).toHaveURL(/dashboard/)
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  11 |     await page.getByAltText('profile picture').first().click()
  12 |     await page.getByText('Logout').click()
  13 |     await page.waitForTimeout(3000)
  14 |     await expect(page).toHaveURL(/login/);
  15 | })
```