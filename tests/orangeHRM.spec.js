const { test, expect } = require("@playwright/test");
const { locators } = require("./Pages/OrangeLocators");
const JSONReader = require("./Utilities/JSONReader.js");
const Json = new JSONReader("./tests/TestData/HrmData.json");


test.describe("HRM Application", () => {
  test.beforeEach("login Application", async ({page}) => {
      await page.goto("/");
  });
  test("Login with valid credentials", async ({page}) => {
    const HrmLocators = new locators(page);
    const loginAccess = Json.getItemByKeyAndIndex("loginData", 0);
    await HrmLocators.userName.fill(loginAccess.userName);
    await HrmLocators.password.fill(loginAccess.password);
    await HrmLocators.loginBtn.click();
    await page.waitForTimeout(3000);
  });
  test("Login with invalid credentials", async ({page}) => {
    const HrmLocators = new locators(page);
    const loginAccess = Json.getItemByKeyAndIndex("loginData", 1);
    await HrmLocators.userName.fill(loginAccess.invaliedName);
    await HrmLocators.password.fill(loginAccess.invaliedPassword);
    await HrmLocators.loginBtn.click();
    await expect(HrmLocators.invaliedText).toBeVisible();
    await page.waitForTimeout(3000);
  });
});
