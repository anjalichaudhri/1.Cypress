///<reference types="cypress"/>
import { loginAsSystemAdmin } from "../pages/loginPage";
import { ConfirmRegionDeleted } from "../pages/regionPage";
//cypress - Spec i.e. test
describe("Confirm Region on School Site Regions Page", function () {
  const region = "Anjali automation region";
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
  it("Confirm Region is deleted", function () {
    cy.wait(6000);
    loginAsSystemAdmin(
      this.loginData.systemAdminEmail,
      this.loginData.systemAdminPassword
    );
    cy.wait(4000);
    ConfirmRegionDeleted(region);

    // shifted this code to above-mentioned function
    // cy.xpath("//input[@placeholder='Search using Region Name']")
    //   .type(this.data.name)
    //   .wait(100);

    // cy.xpath("//span[@class='ant-input-suffix']").click().wait(2000);

    // // cy.xpath("//span[text()='Anjali automation region']").click();
    // // findRegion(this.data.name)
    // cy.wait(100);
    // cy.xpath(`//a//span[text()='${region}']`)
    //   .wait(1000)
    //   .should("exist")
    //   .should("contain", `${region}`)
    //   .click()
    //   .wait(4000);

    // cy.xpath(
    //   `//div[@class='material-order-email']//div[contains(text(),'${this.data.materialOrderEmail}')]`
    // )
    //   .wait(1000)
    //   .should("exist")
    //   .should("have.text", this.data.materialOrderEmail);
  });
});
