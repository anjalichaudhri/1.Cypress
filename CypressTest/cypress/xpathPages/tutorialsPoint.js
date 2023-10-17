export function basePage() {
  cy.visit("https://www.tutorialspoint.com/index.htm");
}

export function Login() {
  cy.xpath('//a[contains(., "Login")]').click();
  // cy.xpath("//a[@id='btnGoogleLogin']").click();
  // cy.xpath("//input[@type='email']").type("textcoach2.ac@gmail.com");
  // cy.xpath("//a[contains(.,'Sign Up')]").click();
  cy.xpath("//input[@placeholder='Enter User Email']").type(
    "automationtest101@yopmail.com"
  );
  cy.xpath("//input[@id='user_password']").type("1qaz!QAZ");
  cy.xpath("//button[@value='Login']").click();
}

export function getUserInformationApiCall() {
  cy.request(
    "POST",
    "https://www.tutorialspoint.com/market/getUserInformation.php",
    {}
  ).then((response) => {
    cy.log(response.body.profile_name);
    console.log(response.body);
    expect(response.status).to.equal(200);
    expect(response.body.loginStatus).to.equal(1);
    expect(response.body.profile_name).to.equal("Test Coach");
  });
}

export function ValidateDashboardPage() {
  cy.xpath(`//span[.=" Student's Dashboard"]`)
    .should("exist")
    .should("contain", "Student's Dashboard");
}

export function AddBookToCart() {
  cy.xpath(
    "//a[contains(@class, 'add_to_cart')][contains(.,'Add to Cart')][@data-course_id='915']"
  ).click();
  cy.xpath(
    "//a[@data-course_id='14062'][contains(@class, 'add_to_cart')][contains(.,'Add to Cart')]"
  ).click();
  // cy.xpath(
  //   "//a[@data-course_id='13063'][contains(@class, 'add_to_cart')][contains(.,'Add to Cart')]"
  // ).click();
}
// let elementFound = false;
export function FindInPage() {
  cy.xpath("//li[contains(., 'Next')]").each((element) => {
    if (element.hasClass("disabled")) return;
    cy.wrap(element).click();
    cy.wait(100);

    // if(!elementFound){
    //   cy.xpath(
    //     "//a[@data-course_id='14062'][contains(@class, 'add_to_cart')][contains(.,'Add to Cart')]"
    //   ).click();
    //   elementFound =true;
    // }
    // if (!elementFound) {
    //   cy.xpath("//a[contains(.,'Add to Cart')]").invoke('attr', 'data-course_id').then(($el) => {
    //     const courseId = $el;
    //     cy.log("outer ", courseId);
    //     if (courseId == '915') {
    //       cy.log("testing");
    //       cy.wrap($el).click();
    //       elementFound = true;
    //     }
    //   });
    // }

    FindInPage();
  });
}

export function RemoveBookFromCart() {
  cy.xpath("//a[contains(@class, 'cart-icon')]").click();

  cy.xpath(
    "//table[contains(@class, 'table')]//tr[position()=1]//td[position()=3]//a"
  )
    .should("contain.class", "remove_from_cart")
    .click();
  cy.wait(4000);
  // cy.pause();
  cy.xpath("//button[contains(., 'Yes, Remove')]").click();
  cy.wait(4000);
}

let totalPrice = 0;
export function ValidateFinalPrice() {
  cy.xpath("//a[contains(@class, 'cart-icon')]").click();

  cy.xpath("//span[@class= 'price']").each(($el, index, $list) => {
    const priceText = $el.text().trim();
    cy.log(priceText);
    const price = priceText.substring(1, priceText.length);
    totalPrice = Number(totalPrice) + Number(price);
    cy.log(totalPrice);
  });
  let finalPrice;
  cy.xpath("//div[@id='total_price']//b").then((price) => {
    const finalPriceText = price.text().trim();
    finalPrice = String(finalPriceText).substring(1, finalPriceText.length);
    expect(Number(finalPrice)).to.equal(totalPrice);
  });
}

export function openXpathTutorialPage() {
  cy.xpath("//a[@class='navbar-brand']").click();
  cy.wait(2000);
  cy.xpath("//span//a[@class='nav-link'][contains(., 'Library')]").click();
  cy.wait(100);
  cy.xpath("//li//a[@title='Learn XPath']").click();
}

export function FindJavascriptTutorial() {
  // cy.xpath("//a[@class='navbar-brand']").click();
  // cy.wait(2000);
  // cy.xpath("//span//a[@class='nav-link'][contains(., 'Library')]").click();
  // cy.wait(100);
  // cy.xpath("//li//a[@title='Learn XPath']").click();
  cy.xpath("//input[@placeholder='Search tutorials ...']").type("Javascript");
  cy.xpath("//button[@id='btnSearch']").click();
  cy.wait(2000);
  cy.xpath("//input[contains(@class,'product-ebooks')]")
    .check()
    .should("be.checked");
  cy.wait(3000);
  cy.xpath("//input[@id='search-category']").type("crafts", { force: true });
  cy.wait(4000);
  cy.xpath("//div[@id='category-div']//input").check().should("be.checked");
}

export function OpenTermsOfUsePage() {
  cy.xpath("//a[contains(.,'Terms of use')]").click();
}

export function logOut() {
  cy.xpath("//i/parent::a[@id='profileMenu']//i").click();
  cy.wait(100);
  cy.xpath("//a/ancestor::ul[@id='profile-menu']//a[.='  Sign Out']").click();
  cy.wait(1000);
  cy.xpath("//a[normalize-space()='Login']").should('be.visible').should('contain.text', 'Login');
}

export function exploreCategoryOptions() {

  // navigate to library> category> option(any)
  //cy.xpath("//a[contains(.,'Terms of use')]").click();
  // cy.xpath("")
  cy.xpath("(//i/parent::a[contains(normalize-space(),'Library')]//i)[1]").click();
  cy.xpath("//span[starts-with(text(),'Category ')]").click();
  cy.xpath("//i/ancestor::ul[contains(@class,'categories-menu')]//a[contains(.,'Famous Monuments')]").click();
}

export default {
  basePage,
  getUserInformationApiCall,
  Login,
  ValidateDashboardPage,
  AddBookToCart,
  FindInPage,
  RemoveBookFromCart,
  openXpathTutorialPage,
  FindJavascriptTutorial,
  logOut
};
