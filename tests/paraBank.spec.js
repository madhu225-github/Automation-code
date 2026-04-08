const { test, expect } = require("@playwright/test");
const { SignupPage } = require("./Pages/SignupPage");

test("parabank application", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm", {
    waitUntil: "load",
  });
  await page.getByRole("link", { name: "Register" }).click();
  await page.locator("#customer\\.firstName").fill("madhu m");
  await page.locator("#customer\\.lastName").fill("miriyala");
  await page.locator('[name="customer.address.street"]').fill("dpd");
  await page.locator("//input[@id='customer.address.city']").fill("spl");
  await page.locator("//input[@id='customer.address.state']").fill("kmm");
  await page.locator("//input[@id='customer.address.zipCode']").fill("507303");
  await page.locator("//input[@id='customer.phoneNumber']").fill("1234567890");
  await page.locator("//input[@id='customer.ssn']").fill("12345");

  const password = "Test@123";
  let registered = false;
  let attempts = 0;

  while (!registered && attempts < 5) {
    attempts++;
    // Generate unique username
    const username = `madhu_${Date.now()}`;
    await page.locator('[name="customer.username"]').fill(username);
    await page.locator('[name="customer.password"]').fill(password);
    await page.locator('[name="repeatedPassword"]').fill(password);
    await page.getByRole("button", { name: "Register" }).click();
    // Check if username already exists error is shown
    const errorVisible = await page.getByText('This username already exists.').isVisible().catch(() => false);

    if (errorVisible) {
      console.log(`Username exists. Retrying with new username...`);
    } else {
      console.log(`Registered successfully with username: ${username}`);
      registered = true;
    }
  }
  expect(registered).toBeTruthy();
  await page.getByRole("link", { name: "Transfer Funds" }).click();
  await page.locator("//input[@id='amount']").fill("1000");
  await page.locator("//select[@id='fromAccountId']").click();
  const fromAccount = await page .locator("//select[@id='fromAccountId']/option").first().getAttribute("value");
  await page.locator("//select[@id='fromAccountId']").selectOption(fromAccount);
  await page.locator("//select[@id='toAccountId']").click();
  const toAccount = await page.locator("//select[@id='fromAccountId']/option").first().getAttribute("value");
  await page.locator("//select[@id='toAccountId']").selectOption(toAccount);
  await page.getByRole("button", { name: "Transfer" }).click();
  await expect(page.locator("//h1[text()='Transfer Complete!']")).toBeVisible();
  await page.getByRole("link", { name: "Accounts Overview" }).click();
  await page.waitForTimeout(3000);
});
// const accountNumber = await page.locator("//select[@id='fromAccountId']/option").nth(1).textContent();
// await page.locator("//select[@id='fromAccountId']").selectOption({ label: accountNumber.trim() });
// const accountNumbers = await page.locator("//select[@id='toAccountId']/option").nth(1).textContent();
// await page.locator("//select[@id='toAccountId']").selectOption({ label: accountNumbers.trim() });

test.only("E-commerse Applicstion", async ({page}) => {
await page.goto('https://automationexercise.com/', {
  waitUntil : 'load'
});
const signUp = new SignupPage(page);
await page.getByRole("link", { name : ' Signup / Login' }).click();
await signUp.nameInput.fill('madhu');
const emailUsed = await signUp.signupWithAutoRetry();
console.log(emailUsed);
//expect(registered).toBeTruthy();
await page.waitForTimeout(3000);
});
