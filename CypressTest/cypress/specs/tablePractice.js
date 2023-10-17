import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("table practice", function () {
  it("verify the table row's cell's sibling data ", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();

    cy
    .xpath("//table[@id='product'][@name='courses']//tr//td[position()=2][contains(., 'Python')]")
    .should('contain', "Python")
    .next()
    .should('have.text', '25');    
  });
});
