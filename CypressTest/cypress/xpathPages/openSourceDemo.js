export function basePage() {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
}

export function login() {
  //cy.xpath('//a[contains(., "Login")]').click();
  // cy.xpath("//a[@id='btnGoogleLogin']").click();
  // cy.xpath("//input[@type='email']").type("textcoach2.ac@gmail.com");
  // cy.xpath("//a[contains(.,'Sign Up')]").click();
  cy.xpath("//input[@placeholder='Username']").type("Admin");
  cy.xpath("//input[@placeholder='Password']").type("admin123");
  cy.xpath("//button[@type='submit']").click();
}

export function addEmployee() {
  // cy.visit("https://opensource-demo.orangehrmlive.com/");
  cy.xpath("//span[text()='PIM']").click();
  cy.wait(1000);
  cy.xpath("//a[contains(.,'Add Employee')]").click();
  cy.wait(1000);
  cy.xpath("//input[@name='firstName']").type("Automation");
  cy.xpath("//input[@name='middleName']").type("User");
  cy.xpath("//input[@name='lastName']").type("test1");
  cy.xpath("//span[contains(@class,'oxd-switch-input')]").click();
  cy.wait(1000);
  cy.xpath(
    "(//input[@class='oxd-input oxd-input--active'][@autocomplete='off'])[1]"
  ).type("automationUserTest1");

  // cy.xpath("//input[@type='password']").eq(1).type("2wsx@WSX");
  cy.xpath(
    "//div[@class='oxd-grid-item oxd-grid-item--gutters user-password-cell']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']"
  ).type("2wsx@WSX");
  cy.xpath(
    "//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']"
  ).type("2wsx@WSX");
  cy.xpath("//button[@type='submit']").click();
}

export function FindUser() {
  cy.xpath("//span[text()='PIM']").click();
  cy.wait(1000);
  cy.xpath("//a[contains(.,'Employee List')]").click();
  cy.xpath("(//input[@placeholder='Type for hints...'])[1]").type(
    "Automation User test1"
  );
  cy.wait(8000);
  cy.xpath("//button[@type='submit']").click({ force: true });
  cy.wait(1000);
  cy.xpath("//span[@class='oxd-text oxd-text--span']").should(
    "not.contain",
    "No Records Found"
  );
  cy.xpath("(//div[@class='oxd-table-cell oxd-padding-cell'])[3]").should(
    "have.text",
    "Automation User"
  );
  cy.xpath("(//div[@class='oxd-table-cell oxd-padding-cell'])[4]").should(
    "have.text",
    "test1"
  );
}

export function EmployeeReports() {
  cy.xpath("//span[text()='Time']").click();
  cy.wait(1000);
  cy.xpath("//span[starts-with(text(),'Reports')]").click();
  cy.xpath("//a[contains(.,'Employee Reports')]").click();
}
export default { basePage, login, addEmployee, FindUser };
