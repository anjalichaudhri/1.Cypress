///<reference types='cypress'/>
import {
  basePage,
  exploreCategoryOptions,
  Login,
  logOut,
} from "../xpathPages/tutorialsPoint";

describe("tutorialspoint site logout", () => {
  it("xpath practice 3", () => {
    basePage();
    Login();
    cy.wait(8000);
    logOut();
    exploreCategoryOptions();
  });
});
