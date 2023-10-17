///<reference types="cypress"/>
// import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("xpath practice 1", function () {
  it("visit google site", function () {
    cy.visit("https://www.google.com/");
    cy.xpath("//input[@class='gLFyf'][@title='Search']").type("gmail account login");
    cy.xpath("//input[@type='submit'][@value='Google Search']").eq(1).click({force: true});
    cy.wait(100);
    cy.xpath("//h3[@class='LC20lb MBeuO DKV0Md'][.='Sign in - Google Accounts']").should('exist');
  });
});
