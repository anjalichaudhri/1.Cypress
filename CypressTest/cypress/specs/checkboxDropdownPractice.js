import { openAutomationPracticePage } from "../pages/automationPracticePage";

describe("checkbox dropdown practice", function () {
  it("check the first check-box option", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    cy.get("#checkBoxOption1")
      .check()
      // make sure that checkbox is checked - to check behavior use should be and to validate use should have that you have checked the right checkbox
      .should("be.checked")
      //validating
      .and("have.value", "option1");

    //uncheck
    cy.get("#checkBoxOption1")
      .uncheck()
      // make sure that checkbox is checked - to check behavior use should be and to validate use should have that you have checked the right checkbox
      .should("not.be.checked")
      //validating
      .and("have.value", "option1");
    cy.wait(1000);
  });

  it("check the only specific check-box options", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    cy.wait(1000);
    // locator means css selector
    cy.get('input[type="checkbox"]')
      .check(["option2", "option3"]) //check method will accept value property then it will only check specified checkbox options
      .should("be.checked")
      .and("have.value", "option2");
  });

  // if a dropdown is static its tagname would be select.
  it("static dropdown", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    // locator means css selector
    // in the select function either pass the value or the text to select particular option
    cy.get("select").select("option2").should("have.value", "option2");
    cy.wait(1000);
  });
  // dynamic dropdown
  it("dynamic dropdown", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    openAutomationPracticePage();
    cy.wait(1000);
    // locator means css selector
    // iterate through all the options present on the screen
    cy.get("select").select("option2").should("have.value", "option2");
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.contains(text(), "India")) {
        cy.wrap($el).click();
      }
    });
  });
});
