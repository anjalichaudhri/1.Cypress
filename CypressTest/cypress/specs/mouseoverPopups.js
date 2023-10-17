import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("mouseover popups practice", function () {
  it("handle mouseover popups ", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();

    // use show() method of jquery i.e used to display the hidden and selected elements.
    // or pass {force: true} property in the click function to click on hidden elements
    // cy
    // .xpath("//div[@class='mouse-hover-content']")
    // .invoke('show')
    // .xpath("//a[contains(.,'Top')]")
    // //.invoke('show')
    // .wait(100)
    // .click();

    cy.url().should('not.include', 'top');
    
    cy.xpath("//div[@class='mouse-hover-content']//a[contains(.,'Top')]")
    //.invoke('show')
    .click({force: true});

    cy.url().should('include', 'top');

    cy.xpath("//div[@class='mouse-hover-content']//a[contains(.,'Reload')]")
    //.invoke('show')
    .click({force: true});

    cy.url().should('not.include', 'top');
  });
});