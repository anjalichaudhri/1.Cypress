///<reference types="cypress"/>
import { loginAsSystemAdmin } from "../pages/loginPage";
import { findRegion } from "../pages/regionPage";
//cypress - Spec i.e. test
describe("Find Region on School Site Regions Page", function () {
   const region = "Anjali automation region";
  // const regionId = 'e4b4eb4e-0588-49f2-9c16-1e7f2ac66f1f';
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
  it("Find Region", function () {
    cy.wait(6000);
    loginAsSystemAdmin(
      this.loginData.systemAdminEmail,
      this.loginData.systemAdminPassword
    );
    cy.wait(4000);
    findRegion(region, this.data);
  });
});
