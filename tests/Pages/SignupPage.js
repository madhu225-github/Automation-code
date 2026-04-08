export class SignupPage {
  constructor(page) {

    // Locators
    this.nameInput = page.locator('[data-qa="signup-name"]');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.emailError = page.getByText("Email Address already exist!");
  }
  
  async signupWithAutoRetry(name, max_attempts = 5) {
    let registered = false;
    let attempts = 0;

    while (!registered && attempts < max_attempts) {
      attempts++;
      const emailaddress = `madhu_${Date.now()}@gmail.com`;
      //const emailaddress = `madhu${Math.floor(Math.random() * 100000)}@gmail.com`;
      //const emailaddress =  `madhu_${Date.now()}_${Math.floor(Math.random()*1000)}@gmail.com`;
     // await page.getByPlaceholder("Name").fill("madhu");
      //await page.locator("//input[@data-qa='signup-email']").fill(emailaddress);
      //await page.getByRole("button", { name: "Signup" }).click();
      //await this.nameInput.fill(name);
    await this.emailInput.fill(emailaddress);
    await this.signupButton.click();

      const error = await this.emailError
        .isVisible()
        .catch(() => false);

    //   if (await this.emailError.isVisible().catch(() => false)) {
    //     console.log(`Attempt ${attempts}: Email exists. Retrying...`);
    //     await this.page.waitForTimeout(500);
    //   } else {
    //     registered = true;
    //     console.log(`Signup successful with email: ${emailaddress}`);
    //   }
    // }

      if (error) {
        console.log(`Email Already Exist. try another Email...`);
      } else {
        console.log(`${emailaddress}`);
        registered = true;
      }
    }
  }
}
