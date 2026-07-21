# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/invalidLogin.spec.ts >> OrangeHRM Invalid Login
- Location: tests/ui/invalidLogin.spec.ts:6:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -  1
+ Received string     + 15

- Invalid credentials
+
+   
+     
+
+     
+     
+     
+     
+     
+     
+     
+     
+
+
+

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    7 × locator resolved to <body>…</body>
      - unexpected value "
  
    

    
    
    
    
    
    
    
    


"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.9
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { LoginPage }
  4  | from '../../pages/LoginPage';
  5  | 
  6  | test('OrangeHRM Invalid Login',
  7  | async ({ page }) => {
  8  | 
  9  |     const loginPage =
  10 |         new LoginPage(page);
  11 | 
  12 |     await loginPage.gotoLoginPage();
  13 | 
  14 |     await loginPage.login(
  15 |         'wrongUser',
  16 |         'wrongPass'
  17 |     );
  18 | 
  19 |     await page.waitForTimeout(3000);
  20 | 
  21 |     await expect(page.locator('body'))
> 22 |         .toContainText('Invalid credentials');
     |          ^ Error: expect(locator).toContainText(expected) failed
  23 | });
```