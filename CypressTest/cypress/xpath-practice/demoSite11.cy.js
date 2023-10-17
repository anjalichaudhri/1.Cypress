///<reference types="cypress"/>
import { loginAsSystemAdmin } from "../pages/loginPage";
import {
  fillTheAddNewRegionForm,
  openAddNewRegionPage,
  openRegionPage,
  submitAddNewRegionForm,
} from "../pages/regionPage";

import { openAdministrationDropdown } from "../pages/schoolAdministrationDropdown";
//cypress - Spec i.e. test
describe("School Site", function () {
  before(function () {
    //run once before all the tests in the block
    //data driven testing with fixures
    cy.fixture("regionInput").then((data) => {
      this.data = data;
    });
    cy.fixture("loginInput").then((data) => {
      this.loginData = data;
    });
  });
  it("Create Region", function () {
    loginAsSystemAdmin(
      this.loginData.systemAdminEmail,
      this.loginData.systemAdminPassword
    );
    cy.wait(4000);
    openAdministrationDropdown();
    cy.wait(4000);
    openRegionPage();
    cy.wait(4000);
    openAddNewRegionPage();
    cy.wait(4000);
    cy.xpath("//div[@id='currency']").click();
    cy.wait(100);
    cy.xpath(
      "//div[@id='currency']/following-sibling::div//li[contains(normalize-space(), 'USD')]"
    ).click();
  });
});
