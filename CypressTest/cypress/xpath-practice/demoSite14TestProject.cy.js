///<reference types="cypress"/>

import { basePage } from "../xpathPages/testproject";

describe("xpath practice testProject", function () {
  it("handle dropdown select case", function () {
    basePage();
    cy.wait(8000);
    cy.xpath("//a[contains(@title,'Platform')]").trigger("mouseover");
    cy.wait(4000);
    cy.xpath(
      "//a[contains(normalize-space(),'Open Source Framework')]/ancestor::ul[@class='inner-menu']//a[contains(.,'Open Source Framework')]"
    ).click();
  });
});
