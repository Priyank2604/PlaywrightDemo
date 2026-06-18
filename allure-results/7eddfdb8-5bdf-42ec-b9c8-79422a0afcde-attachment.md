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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name=\'password\']')
    - locator resolved to <input type="password" name="password" data-v-1f99f73c="" placeholder="Password" class="oxd-input oxd-input--active"/>
    - fill("admin123")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e53]:
    - img "orangehrm-logo"
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
> 8  |     await page.locator("input[name='password']").fill("admin123",{delay:200})
     |                                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  |     await page.locator("//button[normalize-space()='Login']").click()
  10 |     // await page.waitForTimeout(3000)
  11 |     await page.waitForURL('**/dashboard/**', {
  12 |     timeout: 15000
  13 | });
  14 |     await expect(page).toHaveURL(/dashboard/)
  15 |     await page.getByAltText('profile picture').first().click()
  16 |     await page.getByText('Logout').click()
  17 |     await page.waitForURL('**/login');
  18 |     // await page.waitForTimeout(3000)
  19 |     await expect(page).toHaveURL(/login/);
  20 | })
```