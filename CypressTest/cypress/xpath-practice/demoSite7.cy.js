///<reference types="cypress"/>

import {
  basePage,
  handleCheckbox,
  handleDisappearingDropdowns,
  handleStaticDropDown,
} from "../xpathPages/flipkartPlus";

// import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("xpath practice flipkartplus", function () {
  it("create xpath for disappearing dropdowns", function () {
    cy.visit("https://www.flipkart.com/plus");
    cy.xpath("//span[text()='TVs & Appliances']").click();
    cy.xpath("//a[@title='Washing Machine']").click();
    cy.wait(8000);
    cy.xpath("//div[text()='Reviews for Popular Washing Machines']")
      .should("exist")
      .should("contain", "Reviews for Popular Washing Machines");
  });
  it("create xpath for static dropdowns", function () {
    basePage();
    handleDisappearingDropdowns();
    cy.wait(5000);
    handleStaticDropDown('10000');
    cy.wait(4000);
    //handleCheckbox();
    //cy.wait(1000);
  });
});
