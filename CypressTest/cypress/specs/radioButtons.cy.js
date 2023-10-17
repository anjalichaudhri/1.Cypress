import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("visible/hidden elements practice", function () {
  it("check the behavior of visible/hidden elements", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    cy.xpath("//input[@value='radio2']").check().should("be.checked");
  });
});
