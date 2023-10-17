import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("switch to child tabs practice", function () {
  it("handle child tabs", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");  //link for reference
    openAutomationPracticePage();
    cy.get("#opentab").invoke("removeAttr", 'target').click(); 
  });
});
