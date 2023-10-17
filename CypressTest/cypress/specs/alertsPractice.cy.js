import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("popups/alerts practice", function () {
  it("handle alerts", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    //cy.xpath("//input[@value='radio2']").check().should("be.checked");

    //cypress has the ability to fire browser events. window.event is one ofthe browser events that will be triggerd when alerts are open
    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();
    
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
  });
});
