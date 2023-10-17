///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
//the 2 lines given above will enable the auto-suggestions
import "cypress-iframe";
import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("frames practice", function () {
  it("handle frames ", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // to handle frames need to install cypress-frame
    // command to install: npm install -D cypress-iframe
    // import cypress-iframe
    openAutomationPracticePage();
    cy.frameLoaded("#courses-iframe");

    cy.iframe()
      .xpath("(//a[@href='mentorship'][normalize-space()='Mentorship'])[1]")
      .click()
      .wait(1000);
    // validating page
    // cy.iframe().xpath("//h1[contains(@class,'pricing-title')]").should('have.length', 2);
    cy.iframe()
      .xpath("//*[@class='pricing-title text-white ls-1']")
      .should("have.length", 2);
    // cy.iframe().xpath("(//h1[@class='pricing-title text-white ls-1'])[1]").click();
    // cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should('have.length', 2);
  });
});
