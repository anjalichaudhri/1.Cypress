///<reference types="cypress"/>
import {loginAsSystemAdmin } from "../pages/loginPage";
import { openResourcesDropdown } from "../pages/schoolResourcesDropdown";
import { navigateToBackPage } from "../pages/navigation";

//cypress - Spec i.e. test
describe("switch to child tab", function () {
  before(function () {
    //run once before all the tests in the block
    //data driven testing with fixures
    cy.fixture("loginInput").then((data) => {
      this.loginData = data;
    });
  });
  it("switch to child tab", function () {
    loginAsSystemAdmin(
      this.loginData.systemAdminEmail,
      this.loginData.systemAdminPassword
    );
    cy.wait(4000);
    openResourcesDropdown();
    cy.wait(4000);
    cy.xpath("//a[@href='https://gltraining-test.grapecitydev.com']")
      .invoke("removeAttr", "target")
      .click()
      .wait(4000);

    cy.xpath("//h2//span[text()='Teacher Training']")
      .should("be.visible")
      .should("have.text", "Teacher Training")
      .wait(4000);
    // to check current url 
    cy.url().should('include', 'gltraining-test');
    navigateToBackPage();
    cy.wait(1000);
    // after navigating to previous page, validate the current url
    cy.url().should('include', 'glschool-test');
    cy.wait(4000);
  });
});
