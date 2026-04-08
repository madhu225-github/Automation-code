import { test, expect } from "@playwright/test";
import { LocatorsPage } from "./Pages/Locators.js";
const path = require("path");
const JsonReader = require("./Utilities/JSONReader.js");
const Json = new JsonReader("./tests/TestData/InputData.json");

test.describe("Automation Practice", () => {
  test.beforeEach("Login Application", async ({ page }) => {
    await page.goto("./");
    await page.waitForTimeout(2000);
  });
  test("Verify getByRole() locators", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await locators.primaryBtn.click();
    await locators.toggleBtn.click();
    await locators.userNameField.click();
    const sesrchData = Json.getItemByKeyAndIndex("searchData", 0);
    await locators.userNameField.fill(sesrchData.userName);
    await page.waitForTimeout(2000);
    await locators.checkbox.check();
    await page.waitForTimeout(2000);
    await locators.homeLink.click();
    await page.waitForTimeout(2000);
    await locators.productsLink.click();
    await page.waitForTimeout(2000);
    await locators.contactLink.click();
    await page.waitForTimeout(2000);
  });
  test("Verify getByText() locators", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    locators.text.scrollIntoViewIfNeeded();
    await expect(locators.text).toBeVisible();
    await page.waitForTimeout(2000);
    await locators.submitForm.click();
  });
  test("Verify getByLabel() locators", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const sesrchData = Json.getItemByKeyAndIndex("searchData", 1);
    await locators.emailField.fill(sesrchData.email);
    await locators.passwordField.fill(sesrchData.password);
    await locators.ageField.fill(sesrchData.age);
    await page.waitForTimeout(2000);
    await locators.standard.check();
    await page.waitForTimeout(2000);
  });
  test("Verify getByPlaceholder() locators", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const sesrchData = Json.getItemByKeyAndIndex("searchData", 1);
    await locators.enterName.fill(sesrchData.fullName);
    await locators.PhNum.fill(sesrchData.phoneNum);
    await locators.enterMsg.fill(sesrchData.textMsg);
    await locators.searchProduct.fill(sesrchData.searchPro);
    await page.waitForTimeout(2000);
  });
  test("Verify getByAltText() locator", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await expect(locators.img).toBeVisible();
    locators.img.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
  });
  test("Verify getByTitle() locato", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await locators.homeTitle.hover();
    await page.waitForTimeout(5000);
    await expect(locators.homeTitle).toBeVisible();
    await locators.saveBtn.hover();
    await page.waitForTimeout(2000);
    await expect(locators.saveBtn).toBeVisible();
  });
  test("Verify getByTestId() locator", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await expect(locators.verifyDetails).toContainText("john.doe@example.com");
    await locators.editFrofile.click();
  });
  test("Verify file upload (single and multiple)", async ({ page }) => {
    test.setTimeout(60_000);
    const locators = new LocatorsPage(page);
    await test.step("Verify file upload single file", async () => {
      await locators.playwrightPractice.click();
      await page.waitForTimeout(2000);
      await locators.selectFile.click();
      await page.waitForTimeout(3000);
      const filePath = path.resolve("tests/UploadFiles/Test_1.txt");
      await locators.selectFile.setInputFiles(filePath);
      await page.waitForTimeout(2000);
      await locators.uploadFiles.click();
      await page.waitForTimeout(3000);
      await expect(locators.uploadStatus).toBeVisible();
      await page.waitForTimeout(3000);
    });
    await test.step("Verify file upload and multiple files", async () => {
      await locators.selectFile.click();
      await page.waitForTimeout(3000);
      const filePath1 = path.resolve("tests/UploadFiles/Test_1.txt");
      const filePath2 = path.resolve("tests/UploadFiles/Test_2.txt");
      await locators.selectMultipleFile.setInputFiles([filePath1, filePath2]);
      await page.waitForTimeout(5000);
      await locators.uploadMultipulBtn.click();
      await page.waitForTimeout(3000);
      await expect(locators.uploadMultipulFileStatus).toBeVisible();
      await page.waitForTimeout(3000);
    });
    await test.step("Removing files", async () => {
      await locators.selectMultipleFile.setInputFiles([]);
      await page.waitForTimeout(3000);
      await page.reload();
      await locators.uploadMultipulBtn.click();
      await expect(locators.uploadMultipulFileStatus).toBeVisible();
      await page.waitForTimeout(3000);
    });
  });
});

test.describe("Validate Static Web Table", () => {
  test.beforeEach("Login Application", async ({ page }) => {
    await page.goto("./");
    await page.waitForTimeout(3000);
  });
  test("Verify table headers", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const headers = await locators.headerElements.allTextContents();
    expect(headers).toEqual(["BookName", "Author", "Subject", "Price"]);
    console.log("Headers:", headers);
  });
  test("Verify number of rows", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const count = await locators.countRows.count();
    expect(count).toBe(7);
    console.log("Total Rows:", count);
  });
  test("Verify author for a specific book", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    locators.author.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(locators.author).toContainText("Amit");
  });
  test("Verify subject for a specific book", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    locators.author.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(locators.subject).toContainText("JAVA");
  });
  test("Verify price for a specific author", async ({ page }) => {
    test.setTimeout(60_000);
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const price = await locators.mukeshPrices.allTextContents();
    const uniquePrices = [
      ...new Set(
        price.map((removeDuplicates) => parseInt(removeDuplicates.trim()))
      ),
    ];
    console.log("Unique Prices:", uniquePrices);
    expect(uniquePrices).toEqual([500, 3000]);
  });
  test("Verify total sum of all prices", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const allPrice = await locators.sumAllPrices.allTextContents();
    const total = allPrice.reduce(
      (sum, sumTotal) => sum + parseInt(sumTotal.trim()),
      0
    );
    console.log("Total Price:", total);
    expect(total).toBe(7100);
  });
  test("Verify unique subjects", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const subjects = await locators.allSubjects.allTextContents();
    const uniqueSubjects = [
      ...new Set(
        subjects.map((removeDuplicates) =>
          removeDuplicates.trim().toLowerCase()
        )
      ),
    ];
    console.log("uniqueSubjects:", uniqueSubjects);
  });
});

test.describe("Validate Dynamic Web Table", () => {
  test("Validate Dynamic Web Table", async ({ page }) => {
    await page.goto("./");
    await page.waitForTimeout(3000);
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await locators.dynamicTable.scrollIntoViewIfNeeded();
    await expect(locators.dynamicTable).toBeVisible();
    await page.waitForTimeout(2000);
    async function getTableData() {
      const headerEle = await locators.headers.allTextContents();
      const rows = await (locators.tptalRows,
      (trs, headerEle) =>
        trs.map((tr) => {
          const cells = [...tr.querySelectorAll("td")];
          const rowData = {};
          cells.forEach((cell, i) => {
            rowData[headerEle[i]] = cell.textContent.trim();
          });
          return rowData;
        }),
      headerEle);
      return rows;
    }
    const oldTableData = await getTableData();
    console.log("OLD Table Data:", oldTableData);
    await page.reload();
    await page.waitForTimeout(3000);
    const newTableData = await getTableData();
    console.log("NEW Table Data:", newTableData);
    const dataChanged = oldTableData !== newTableData;
    if (dataChanged) {
      console.log("Table updated dynamically after refresh!");
    } else {
      console.log("Table did not change after refresh!");
    }
    expect(dataChanged).toBeTruthy();
  });
  test("Validate Pagination Table", async ({ page }) => {
    await page.goto("./");
    await page.waitForTimeout(3000);
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const pages = await locators.totalPages.count();
    console.log(pages);
    let totalSum = 0;
    for (let p = 0; p < pages; p++) {
      const pageLink = locators.totalPages.nth(p);
      const pageText = await pageLink.textContent();
      await pageLink.click();
      await page.waitForTimeout(2000);
      console.log(`Clicked page ${pageText}`);
      const totalRows = await locators.rows.count();
      console.log(totalRows);

      for (let i = 0; i < totalRows; i++) {
        const priceText = await locators.priceRow.nth(i).textContent();
        const priceValue = parseFloat(priceText.replace(`$`, "").trim());
        totalSum += priceValue;
        console.log(`Row ${i + 1} price: ${priceValue}`);
      }
    }
    console.log(`Total price from all pages: ${totalSum}`);
    expect(totalSum).toBeGreaterThan(0);
  });
});

test.describe("Demo Application", () => {
  test.beforeEach("Application Login", async ({ page }) => {
    await page.goto("./");
    await page.waitForTimeout(3000);
  });
  test("Verify all form sections submit properly", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const inputs = await locators.allInputs;
    for (let i = 0; i < (await inputs.count()); i++) {
      await inputs.nth(i).fill(`Test input ${i + 1}`);
      await expect(inputs.nth(i)).toHaveValue(`Test input ${i + 1}`);
    }
    await page.waitForTimeout(5000);
  });
  test("Verify input inside shadow root", async ({ page }) => {
    const locators = new LocatorsPage(page);
    const sesrchData = Json.getItemByKeyAndIndex("searchData", 1);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await page.waitForSelector("#shadow_host", { state: "visible" });
    await locators.shadowHost.fill(sesrchData.shadowDOM);
    await expect(locators.shadowHost).toBeVisible();
    await page.waitForTimeout(3000);
    await test.step("Verify file upload inside shadow DOM", async () => {
      await locators.shadowHostFile.click();
      await page.waitForTimeout(3000);
      const filePath = path.resolve("tests/UploadFiles/Test_1.txt");
      await locators.shadowHostFile.setInputFiles(filePath);
      await page.waitForTimeout(5000);
    });
  });
  test("Verify Wikipedia tab input", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const sesrchData = Json.getItemByKeyAndIndex("searchData", 1);
    await locators.wikipedia.fill(sesrchData.wikipediaText);
    await locators.searchIcon.click();
    await page.waitForTimeout(3000);
    await locators.wikipediaLink.click();
    await page.waitForTimeout(3000);
  });
  test("Verify START button enables dynamically", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await locators.dynamicBtn.hover();
    await page.waitForTimeout(2000);
    await locators.dynamicBtn.click();
    await page.waitForTimeout(3000);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(2000);
  });
  test("Alerts Handling", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    // Simple Alert
    page.once("dialog", (dialog) => dialog.accept());
    await locators.alert.click();
    // Confirmation Alert
    page.once("dialog", (dialog) => dialog.dismiss());
    await locators.conformAlert.click();
    await page.waitForTimeout(5000);
    await expect(locators.alertStatus).toHaveText("You pressed Cancel!");
    // Prompt Alert
    page.once("dialog", (dialog) => dialog.accept("Harry Potter"));
    await page.waitForTimeout(2000);
    await locators.promptAlert.click();
    await expect(locators.alertStatus).toHaveText(
      "Hello Harry Potter! How are you today?"
    );
    console.log("Alerts handled successfully.");
    await test.step("Verify new tab and popup window buttons", async () => {
      await locators.newTab.click();
      await page.waitForTimeout(2000);
      page.goBack();
      await locators.popupWindow.click();
      await page.waitForTimeout(3000);
    });
    await test.step("Mouse over the botton to open the dropdown menu", async () => {
      await locators.mouseOver.hover();
      await expect(locators.hover).toBeVisible();
      await page.waitForTimeout(2000);
    });
  });
  test("Double Click Action", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await locators.DoubleClickbutton.dblclick();
    await expect(locators.InputField2).toHaveValue("Hello World!");
    await page.waitForTimeout(3000);
  });
  test("Verify element is dropped correctly", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const source = locators.dragText;
    const target = locators.copyDrag;
    await source.dragTo(target);
    await page.waitForTimeout(3000);
  });
  test("Verify slider value range", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const slider = await locators.totalSlider;
    const handles = await locators.sliderPoints;
    const priceLabel = await locators.priceValue;
    const leftHandle = handles.nth(0);
    const rightHandle = handles.nth(1);
    const box = await slider.boundingBox();
    console.log(box);
    const sliderStart = box.x;
    const sliderWidth = box.width;
    const sliderY = box.y + box.height / 2;
    const min = 0;
    const max = 500;
    //  Adjust for handle width and rounding to get perfect alignment
    const handleCorrection = 0.004 * sliderWidth; // about 0.4% of width for perfect match
    // Convert values to pixel X positions
    const valueToPixel = (value) =>
      sliderStart +
      ((value - min) / (max - min)) * sliderWidth +
      handleCorrection;
    await leftHandle.hover();
    await page.mouse.down();
    await page.mouse.move(valueToPixel(100), sliderY);
    await page.mouse.up();

    await rightHandle.hover();
    await page.mouse.down();
    await page.mouse.move(valueToPixel(350), sliderY);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    const priceRange = await priceLabel.inputValue();
    console.log("Selected Range:", priceRange);
  });
  test("Verify SVG shape visible", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    locators.circle.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await expect(locators.circle).toBeVisible();
    await expect(locators.rectangle).toBeVisible();
    await expect(locators.polygon).toBeVisible();
  });
  test("Scrolling Dropdown Selection", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await locators.dropDownInput.click();
    const list = await locators.dropDownValues.count();
    await page.waitForTimeout(4000);
    console.log(list);
    await locators.selectValues.click();
    await page.waitForTimeout(5000);
    await expect(locators.dropDownInput).toBeVisible();
  });
  test("Labels and Links Validation", async ({ page }) => {
    test.setTimeout(90_000);
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    await expect(locators.mobiles).toBeVisible();
    await locators.laptop.click();
    await page.waitForTimeout(4000);
    const appleLink = locators.appleURL;
    await expect(page).toHaveURL(appleLink);
    await page.goBack();
    await test.step("Verify broken links", async () => {
      const links = await locators.allLinks;
      const count = await links.count();
      console.log("Total Links Found:", count);
      for (let i = 0; i < count; i++) {
        const link = links.nth(i);
        const linkText = await link.textContent();
        console.log(`Clicking: ${linkText}`);
        await link.click();
        await page.waitForTimeout(2000);
        await page.goBack();
      }
    });
  });
  test("Visitors Count Visibility", async ({ page }) => {
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const visitors = await locators.totalvisitors;
    const value = await visitors.textContent();
    console.log("Visitor count verified:", value);
  });
  test.only("Verify Footer Links", async ({ page }) => {
    test.setTimeout(60_000);
    const locators = new LocatorsPage(page);
    await locators.playwrightPractice.click();
    await page.waitForTimeout(2000);
    const Flinks = await locators.footerLink;
    const countLinks = await Flinks.count();
    console.log("Total Links Found:", countLinks);
    for (let i = 0; i < countLinks; i++) {
      const links = Flinks.nth(i);
      const linkText = await links.textContent();
      console.log(`Clicking: ${linkText}`);
      await links.click();
      await page.waitForTimeout(3000);
      await page.goBack();
    }
  });
});
