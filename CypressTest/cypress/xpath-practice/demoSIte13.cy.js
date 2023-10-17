///<reference types='cypress'/>

import {
  basePage,
  navigateToAutoTestDataPage,
} from "../xpathPages/selectorsHub";

describe("selectorshub site", () => {
  it("xpath practice", () => {
    basePage();
    cy.wait(1000);
    navigateToAutoTestDataPage();
  });
});
