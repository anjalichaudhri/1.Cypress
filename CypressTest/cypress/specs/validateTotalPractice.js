///<reference types="cypress"/>
//the 2 lines given above will enable the auto-suggestions
import { openAngularPracticePage } from "../pages/automationPracticePage";

describe("shopping amount validation practice", function () {
  before(function () {
    //run once before all the tests in the block
    //data driven testing with fixures
    cy.fixture("formInput").then((data) => {
      this.data = data;
    });
  });
  it("to validate total amount", function () {
    Cypress.config("defaultCommandTimeout", 8000);
    // cy.visit("https://rahulshettyacademy.com/angularpractice/");
    //openAngularPracticePage();
    cy.visit(Cypress.env("angularPracticeUrl"));
    cy.wait(1000);
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
    //click checkout button
    cy.xpath("//a[contains(., 'Checkout')]").click().wait(1000);

    let totalPrice = 0;

    cy.xpath("//td[4][contains(., '₹.')]").each(($el, index, $list) => {
      const priceText = $el.text();
      cy.log(priceText);
      const splitPriceText = priceText.split(" ");
      cy.log(splitPriceText);
      totalPrice = Number(totalPrice) + Number(splitPriceText[1].trim());
      cy.log(totalPrice);      
    });

    cy.xpath("//h3//strong[contains(text(),'₹. ')]").each(($el, index, $list) => {
      const expectedTotal = $el.text();
      cy.log(expectedTotal);
      const splitExpectedTotal = expectedTotal.split(" ");
      cy.log("expected", splitExpectedTotal);      
      expect(totalPrice).to.equal(Number(splitExpectedTotal[1].trim()));
    })      
  });
});
