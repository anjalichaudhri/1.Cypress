///<reference types="cypress"/>
import { loginAsSystemAdmin } from "../pages/loginPage";
import { findRegion, ConfirmRegionDeleted } from "../pages/regionPage";
//cypress - Spec i.e. test
describe("Find Region on School Site Regions Page", function () {
  const region = 'Anjali automation region';
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
    cy.wait(4000);
    loginAsSystemAdmin(
      this.loginData.systemAdminEmail,
      this.loginData.systemAdminPassword
    );
    cy.wait(4000);
    findRegion(region, this.data);
    cy.xpath("//a//i[@title='Edit region']").click().wait(1000);
    cy.xpath("//input[@id='name']").should("have.value", `${this.data.name}`);
    cy.xpath("//div[@id='gsVersionGroupId']//div[@class='ant-select-selection__rendered']//div[contains(., 'GSv4')]").should("have.text", "GSv4");
    // cy.pause();
    cy.xpath("//i[@title='Delete']").click();
    cy.wait(4000);
    cy.xpath("//button//span[contains(.,'OK')]").click({force: true});
    // ConfirmRegionDeleted(region, this.data);  
  });
});
