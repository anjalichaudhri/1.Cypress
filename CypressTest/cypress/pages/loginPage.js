import { schoolSiteBasePage } from "./basePage";
const schoolAdminEmail = "mytestuser2.ac@outlook.com";
const schoolAdminPassword = "1qaz!QAZ";
const systemAdminEmail = "anjalitestregionadmin1@yopmail.com";
const systemAdminPassword = "1qaz!QAZ";
export function loginAsSchoolAdmin() {
  //cy.visit("https://glschool-test.grapecitydev.com/")
  schoolSiteBasePage();
  cy
    //.get('#LoginId')
    .xpath('//input[@name="LoginId"]')
    .type("mytestuser2.ac@outlook.com");
  cy
    //.get('#Password')
    .xpath('//input[@name="Password"]')
    .type("1qaz!QAZ");
  cy.get("#btn-submit").click();
}

export function loginAsSystemAdmin(email, password) {
  //cy.visit("https://glschool-test.grapecitydev.com/")
  schoolSiteBasePage();
  cy.xpath("//p[contains(text(),'Sign in')]").contains("Sign in");
  cy.xpath('//input[@name="LoginId"]').type(email);
  cy
    //.get('#Password')
    .xpath('//input[@name="Password"]')
    .type(password);
  cy
    // .get('#btn-submit')
    .xpath('//button[@id="btn-submit"]')
    .click();
}

export default { loginAsSchoolAdmin, loginAsSystemAdmin };
