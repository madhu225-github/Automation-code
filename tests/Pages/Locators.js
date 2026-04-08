export class LocatorsPage {
    constructor(page) {
        this.homePage = page.locator("//a[normalize-space()='Home']");
        this.signInBtn = page.locator("//a[normalize-space()='Signup / Login']");
        this.newUser = page.locator("//h2[text()='New User Signup!']");
        this.name  = page.getByPlaceholder('Name');
        this.email  = page.locator("//div[@class='signup-form']").getByPlaceholder('Email Address');
        this.signUpBtn  = page.getByRole('button',{name:'Signup'});
        this.AcInfo = page.locator("//b[text()='Enter Account Information']");
        this.title = page.getByLabel('Mr.');
        this.password = page.getByLabel("Password ");
        this.daysField = page.locator('#days');
        this.monthsField = page.locator('#months');
        this.yearsField = page.locator('#years');
        this.checkboxOne = page.getByRole('checkbox',{name:'Sign up for our newsletter!'});
        this.checkboxTwo = page.getByLabel('Receive special offers from our partners!');
        this.firstName = page.locator("//input[@id='first_name']");
        this.lastName = page.locator("//input[@id='last_name']");
        this.companyName = page.locator("//input[@id='company']");
        this.addressOne = page.locator("//input[@id='address1']");
        this.addresstwo = page.locator("//input[@id='address2']");
        this.state = page.locator("//input[@id='state']");
        this.city = page.locator("//input[@id='city']");
        this.code = page.locator("//input[@id='zipcode']");
        this.Num = page.locator("//input[@id='mobile_number']");
        this.accountBtn = page.getByRole('button',{name: 'Create Account'});
        this.accountCreated = page.locator("//b[text()='Account Created!']");
        this.continueBtn = page.getByRole('link',{ name: 'Continue' });
        this.deleteBtn = page.getByRole('link',{ name: ' Delete Account' });
        this.AcDetail = page.locator("//a[text()=' Logged in as ']");
        this.AcText = page.locator("//b[text()='Account Deleted!']");
        this.loginUser = page.locator("//h2[text()='Login to your account']");
        this.loginEmail  = page.locator("//div[@class='login-form']").getByPlaceholder('Email Address');
        this.loginPassword  = page.getByPlaceholder('Password');
        this.loginBtn  = page.getByRole('button',{name:'Login'});
        this.errorMsg = page.locator("//p[text()='Your email or password is incorrect!']");
        this.logOut = page.locator("//a[normalize-space()='Logout']");
        this.existError = page.locator("//p[text()='Email Address already exist!']");
        this.contactUsBtn = page.getByRole('link',{ name: ' Contact us' });
        this.getInTouch = page.locator("//h2[text()='Get In Touch']");
        this.contactEmail  = page.getByRole('textbox', { name: 'Email', exact: true });
        this.contactSubject  = page.getByPlaceholder('Subject');
        this.contactMsg  = page.getByPlaceholder('Your Message Here');
        this.submitBtn = page.locator("//input[@data-qa='submit-button']"); 
        this.successMsg = page.locator("//h2[text()='Get In Touch']/following-sibling::div[contains(text(),'Success! Your details')]");
        this.homeBtn = page.locator("//div[@id='form-section']").getByRole('link',{ name: ' Home' });
        this.testCasesBtn = page.getByRole('link',{ name: ' Test Cases', exact: true });
        this.testCasesURL = 'https://automationexercise.com/test_cases';
        this.ProductsBtn = page.getByRole('link',{ name: ' Products'});
        this.productsUrl= 'https://automationexercise.com/products';
        this.allProducts = page.locator("//div[@class='features_items']");
        this.viewProductBtn = page.getByRole('link',{ name: 'View Product' }).first();
        this.prodectDetailsPage = 'https://automationexercise.com/product_details/1';
        this.productName = page.locator("//h2[text()='Blue Top']");
        this.productCategory = page.locator("//p[contains(text(),'Women')]");
        this.productPrice = page.locator("//p[contains(text(),'Women')]/following-sibling::span/span");
        this.productAvilability = page.locator("//b[text()='Availability:']");
        this.productCondition = page.locator("//b[text()='Condition:']");
        this.productBrand = page.locator("//b[text()='Brand:']");
        this.searchProduct = page.locator("//input[@id='search_product']");
        this.searchbtn = page.locator("//button[@id='submit_search']");
        this.searchedProducts = page.locator("//h2[text()='Searched Products']");
        this.subscription = page.locator("//h2[text()='Subscription']");
        this.susbscribeEmail = page.locator("//input[@id='susbscribe_email']");
        this.subscribeBtn = page.locator("//button[@id='subscribe']");
        this.subscribeSuccessMsg = page.locator("//div[@id='success-subscribe']");
        this.cartBtn = page.getByRole('link',{ name: ' Cart' });
        this.firstProduct = page.locator("(//div[@class='single-products'])[1]");
        this.addToCartOne = page.locator("(//a[@data-product-id='1'])[1]");
        this.continueShopBtn = page.getByRole('button',{ name: 'Continue Shopping' });
        this.secondProduct = page.locator("(//div[@class='single-products'])[2]");
        this.addToCartTwo = page.locator("(//a[@data-product-id='2'])[1]");
        this.viewCart = page.getByRole('link',{ name: 'View Cart' });
        this.cartProducts = page.locator("//table[@id='cart_info_table']//following::tbody");
        this.allProductPrices = page.locator("//td[@class='cart_price']/p");
        this.allProductQuantity = page.locator("//td[@class='cart_quantity']/button");
        this.allProductsTotal = page.locator("//td[@class='cart_total']/p");
        this.viewProductBtn = page.getByRole('link',{ name: 'View Product' }).first();
        this.susbscribeEmail = page.locator("//input[@id='quantity']");
        this.addToCartBtn = page.locator("//button[normalize-space()='Add to cart']");
        this.cartPage = 'https://automationexercise.com/view_cart';        
        this.checkOut = page.locator("//a[normalize-space()='Proceed To Checkout']");
        this.regAndLogin = page.getByRole('link',{ name: 'Register / Login' });
        this.checkOutaddressDetails = page.locator("//h2[text()='Address Details']//following::div[@data-qa='checkout-info']");
        this.reviewOrderDetails = page.locator("//h2[text()='Review Your Order']/following::div[@id='cart_info']");
        this.checkoutText = page.locator("//div[@id='ordermsg']/textarea");
        this.placeOrderBtn = page.locator("//a[text()='Place Order']");
        this.cardName = page.locator("//input[@data-qa='name-on-card']");
        this.cardNum = page.locator("//input[@data-qa='card-number']");
        this.cardCvc = page.locator("//input[@data-qa='cvc']");
        this.cardExpiryMonth = page.locator("//input[@data-qa='expiry-month']");
        this.cardExpiryYear = page.locator("//input[@data-qa='expiry-year']");
        this.payPaymentBtn = page.getByRole('button',{ name: 'Pay and Confirm Order' });
        this.orderSuccessMsg = page.locator("//div[@id='success_message']");
        this.removeProduct = page.locator("//tr[@id='product-1']/td[@class='cart_delete']/a");
        this.homePageURL = 'https://automationexercise.com/';
        this.categoryText = page.locator("//h2[text()='Category']");
        this.womenSection = page.locator("//a[normalize-space()='Women']");
        this.womenDress = page.getByRole('link',{ name: 'Dress ' });
        this.categoryPage = 'https://automationexercise.com/category_products/1';
        this.dressProductText = page.locator("//h2[text()='Women - Dress Products']");
        this.menSection = page.locator("//a[normalize-space()='Men']");
        this.menTshirt = page.getByRole('link',{ name: 'Tshirts ' });
        this.mensTshirtPage = page.locator("//h2[text()='Men - Tshirts Products']");
        this.brandsText = page.locator("//h2[text()='Brands']");
        this.poloBrand = page.getByRole('link',{ name: 'Polo' });
        this.poloUrl = 'https://automationexercise.com/brand_products/Polo';
        this.hmBrand = page.getByRole('link',{ name: 'H&M' });
        this.hmUrl = 'https://automationexercise.com/brand_products/H&M';
        this.productNames = page.locator("//div[@class='productinfo text-center']//p");
        this.productCards = page.locator(".single-products");
        this.allproductAddToCart = page.locator("//div[@class='product-overlay']/child::div/a");
        this.addReviewHereBox  = page.getByPlaceholder('Add Review Here!');
        this.writeYourName  = page.getByPlaceholder('Your Name');
        this.viewProductEmail  = page.getByRole('textbox', { name: 'Email Address', exact: true })
        this.reviwSubmitbtn = page.locator("//button[@id='button-review']");
        this.reviewSuccess = page.locator("//span[text()='Thank you for your review.']");
        this.recommendedText = page.locator("//h2[text()='recommended items']");
        this.carosuelProducts = page.locator("//div[@id='recommended-item-carousel']");
        this.recommendedProductAddToCart = page.locator("//div[@id='recommended-item-carousel']//p[text()='Men Tshirt']/following-sibling::a");
        this.invoiceBtn = page.locator("//a[text()='Download Invoice']");
        this.scrollUpBtn = page.locator("//a[@id='scrollUp']");
        this.bannerHeading = page.locator("//div[@class='carousel-inner']/div[@class='item active']//h2[contains(text(),'Full-Fledged')]");

        //PLAYWRIGHTDEMO.SPEC.JS//

    this.playwrightPractice = page.getByRole("link", { name: "PlaywrightPractice" });
    this.primaryBtn = page.getByRole("button", { name: "Primary Action" });
    this.toggleBtn = page.getByRole("button", { name: "Toggle Button" });
    this.userNameField = page.getByRole('textbox', { name: 'Username'});
    this.checkbox = page.getByRole('checkbox', { name: ' Accept terms'});
    this.homeLink = page.locator("#role-locators").getByRole("link", { name: "Home"});
    this.productsLink = page.locator("#role-locators").getByRole('link', { name: 'Products'});
    this.contactLink = page.locator("#role-locators").getByRole('link', { name: 'Contact'});
    this.submitForm = page.getByRole("button", { name: 'Submit Form'});
    this.saveBtn = page.getByRole("button", { name: "Save" });
    this.uploadFiles = page.getByRole('button', { name:'Upload Single File'});
    this.uploadMultipulBtn = page.getByRole('button', { name: 'Upload Multiple Files'});
    this.dynamicBtn = page.getByRole('button', {name:'start'});
    this.alert = page.getByRole('button', { name: 'Simple Alert' });
    this.conformAlert = page.getByRole('button', { name: 'Confirmation Alert' });
    this.promptAlert = page.getByRole('button', { name: 'Prompt Alert' });
    this.newTab = page.getByRole('button', { name: 'New Tab' });
    this.popupWindow = page.getByRole('button', { name: 'Popup Windows' });
    this.mouseOver = page.getByRole('button', { name: 'Point Me' });
    
    //getByText() Locators
    this.text = page.getByText('important', { exact: true });

    //getByLabel() Locators
    this.emailField = page.getByLabel('Email Address:');
    this.passwordField = page.getByLabel('Password:');
    this.ageField = page.getByLabel('Your Age:');
    this.standard = page.getByLabel(' Standard');

    //getByPlaceholder() Locators
    this.enterName = page.getByPlaceholder("Enter your full name");
    this.PhNum = page.getByPlaceholder("Phone number (xxx-xxx-xxxx)");
    this.enterMsg = page.getByPlaceholder("Type your message here...");
    this.searchProduct = page.getByPlaceholder("Search products...");
    this.dropDownInput = page.getByPlaceholder("Select an item");

    //getByAltText() Locators
    this.img = page.getByAltText("logo image");

    //getByTitle() Locators
    this.homeTitle = page.getByTitle("Home");
    this.htmlTitle = page.getByTitle("HTML");

    //getByTestId() Locators
    this.verifyDetails = page.getByTestId('profile-email');
    this.editFrofile = page.getByTestId('edit-profile-btn');

    //Verify file upload
    this.selectFile = page.locator("//input[@id='singleFileInput']");
    this.uploadStatus = page.locator("//p[@id='singleFileStatus']");
    this.selectMultipleFile = page.locator("//input[@id='multipleFilesInput']");
    this.uploadMultipulFileStatus = page.locator("//p[@id='multipleFilesStatus']");

    //Static web table
    this.headerElements = page.locator("//div[@id='HTML1']//table//tr/th");
    this.countRows = page.locator("//div[@id='HTML1']//table/tbody/tr");
    this.author = page.locator("//td[text()='Learn Selenium']/following-sibling::td[1]");
    this.subject = page.locator("//td[text()='Master In Java']/following-sibling::td[2]");
    this.mukeshPrices = page.locator("//tr[td[text()='Mukesh']]/td[last()]");
    this.sumAllPrices = page.locator("//div[@id='HTML1']//tr//td[last()]");
    this.allSubjects = page.locator("//div[@id='HTML1']//tr/td[3]");

    //Dynamic web Table
    this.dynamicTable = page.locator("//div[@id='HTML12']//table");
    this.cpuValue = page.locator("//td[text()='Chrome']/following-sibling::td[4]");
    this.memoryValue = page.locator("//td[text()='Chrome']/following-sibling::td[1]");
    this.headers = page.locator("//div[@id='HTML12']//table//tr");
    this.tptalRows = page.locator("//div[@id='HTML12']//table//tr");
    this.chromeRow = page.locator("//table//tbody//tr[td[normalize-space(text())='Chrome']]");

    //Pagination Web Table
    this.totalPages = page.locator("//table[@id='productTable']/following-sibling::ul//a");
    this.rows = page.locator("//table[@id='productTable']/tbody/tr");
    this.priceRow = page.locator("//table[@id='productTable']/tbody/tr/td[3]");

    //Form Section
    this.allInputs = page.locator("//div[@id='HTML6']//div/input");

    //Shadow DOM
    this.shadowHost = page.locator("#shadow_host").locator("input[type='text']");
    this.shadowHostFile = page.locator("#shadow_host").locator("input[type='file']");

    //Tabs
    this.wikipedia = page.locator("//input[@id='Wikipedia1_wikipedia-search-input']");
    this.searchIcon = page.locator("//input[@type='submit']");
    this.wikipediaLink = page.locator("//div[@id='wikipedia-search-result-link']/a[text()='Playwright']");

    //Alerts
    this.alertStatus = page.locator("//p[@id='demo']");

    //MouseHover
    this.hover = page.locator("//button[text()='Point Me']/following::div[1]");

    //Double Click
    this.DoubleClickbutton = page.getByRole('button', { name: 'Copy Text' });
    this.InputField2 = page.locator("//input[@id='field2']");

    //Drag
    this.dragText = page.locator("//div[@id='draggable']");
    this.copyDrag = page.locator("//div[@id='droppable']");

    //Slider
    this.sliderPoints = page.locator("//div[@id='slider-range']/span");
    this.priceValue = page.locator("//input[@id='amount']");
    this.totalSlider = page.locator("//div[@id='slider-range']");

    //SVG Elements
    this.circle = page.locator("//*[name()='circle']");
    this.rectangle = page.locator("//div[@id='HTML14']//*[name()='rect']");
    this.polygon = page.locator("//*[name()='polygon']");

    //DropDown Values
    this.dropDownValues = page.locator("//div[@id='dropdown']/div");
    this.selectValues = page.locator("//div[@id='dropdown']/div[15]");

    //Labels And Links
    this.mobiles = page.locator("//div[@id='mobiles']");
    this.laptop = page.locator("//div[@id='laptops']/a[text()='Apple']");
    this.appleURL = 'https://www.apple.com/';
    this.allLinks = page.locator("//div[@id='broken-links']/a");

    //Visitors
    this.totalvisitors = page.locator("//span[@id='Stats1_totalCount']");
    
    //Footer Links
    this.footerLink = page.locator("//h2[text()='Footer Links']/following-sibling::div/ul//a");
    }
}
