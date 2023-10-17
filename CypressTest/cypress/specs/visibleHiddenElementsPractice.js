import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("visible/hidden elements practice", function () {
  it("check the behavior of visible/hidden elements", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    cy.xpath("//input[@id='show-textbox']").click();

    cy.xpath("//input[@id='displayed-text']").should("be.visible");

    cy.xpath("//input[@id='hide-textbox']").click();

    cy.xpath("//input[@id='displayed-text']").should("not.be.visible");
  });
});
