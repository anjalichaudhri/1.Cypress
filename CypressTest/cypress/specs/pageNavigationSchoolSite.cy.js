///<reference types="cypress"/>
import { loginAsSystemAdmin } from "../pages/loginPage";
import {
    editRegion,
  navigateToBackPage,
  navigateToNextPage,
  openRegionPage,
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
    navigateToBackPage();
    navigateToNextPage();
    cy.wait(3000);
    cy.xpath("//div[@class='wj-row']//div[contains(@class, 'wj-cell regioncol')]//span").contains('Anjali automation region RN 82335').click();
    cy.wait(4000);
    editRegion();
  });
});
