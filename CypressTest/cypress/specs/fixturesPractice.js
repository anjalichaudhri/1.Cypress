///<reference types="cypress"/>
//the 2 lines given above will enable the auto-suggestions
import { openAngularPracticePage } from "../pages/automationPracticePage";

describe("fixures practice", function () {
  before(function () {
    //run once before all the tests in the block
    //data driven testing with fixures
    cy.fixture("formInput").then((data) => {
      this.data = data;
    });
  });
  it("use external data to fill the form", function () {
    Cypress.config("defaultCommandTimeout", 8000);
    // cy.visit("https://rahulshettyacademy.com/angularpractice/");
    openAngularPracticePage();
    cy.xpath("(//input[@name='name'])[1]").type(this.data.name);
    // cy.xpath("(//input[@name='name'])[1]").type(this.data.name);
    // cy.xpath("//input[@name='name'][@minlength='2']").type(this.data.name);
    // cy.xpath("(//input[@name='name'])").eq(1).type(this.data.name);

    cy.xpath("//select[@id='exampleFormControlSelect1']").select(
      this.data.gender
    );
    cy.xpath("(//input[@name='name'])[position()=2]").should(
      "have.value",
      this.data.name
    );
    cy.xpath("(//input[@name='name'])[1]").should("have.attr", "minlength", 2);
    cy.xpath("//input[@id='inlineRadio3']").should("be.disabled");
    // cy.xpath("//a[normalize-space()='Shop']").click();
    cy.xpath("//a[contains(@href,'/angularpractice/shop')]").click();
    // built custom commands
    cy.selectProduct("Blackberry");
    cy.selectProduct("Nokia Edge");
    // parameterize test with multiple data sets
    //open checkout button
    cy.xpath("//a[contains(., 'Checkout')]").click().wait(1000);
    cy.xpath(
      "//button[@class='btn btn-success'][contains(normalize-space(),'Checkout')]"
    )
      .click()
      .wait(1000);
    cy.xpath("//input[@id='country']").type("ind");
    cy.xpath("//a[contains(normalize-space(),'India')]").click();
    // cy.pause();
    cy.xpath("//label[@for='checkbox2']").click().should("be.visible");
    cy.xpath("//input[@id='checkbox2']").should("be.checked");
    cy.xpath("//input[@value='Purchase']").click();
    cy.xpath("//div[@class='alert alert-success alert-dismissible']").should(
      "contain",
      "Thank you! Your order will be delivered in next few weeks :-)."
    );
  });
});
