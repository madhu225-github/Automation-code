export class locators {
    constructor(page) {
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole("button", {name: ' Login '});
        this.invaliedText = page.locator("//p[text()='Invalid credentials']");
    }
}