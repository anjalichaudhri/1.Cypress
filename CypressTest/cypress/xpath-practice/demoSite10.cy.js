///<reference types="cypress"/>
// import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("xpath practice 1", function () {
    it("visit google site", function () {
      cy.visit("https://twitter.com");
      // cy.xpath("//input[@class='gLFyf'][@title='Search']").type("gmail account login");
      // cy.xpath("//input[@type='submit'][@value='Google Search']").eq(1).click({force: true});
      // cy.wait(100);
      // cy.xpath("//h3[@class='LC20lb MBeuO DKV0Md'][.='Sign in - Google Accounts']").should('exist');
      // cy.wait(4000);
      // cy.xpath("//*[local-name()='svg'][@class='r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e']").click();
    });
  });
  