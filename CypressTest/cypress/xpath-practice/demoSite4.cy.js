///<reference types="cypress"/>

import { addEmployee, basePage, confirmUserAdded, login } from "../xpathPages/openSourceDemo";

// import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("xpath practice 4", function () {
  it("", function () {
    basePage();
    cy.wait(1000);
    login();
    cy.wait(4000);
    addEmployee();
    cy.wait(4000);
  });
});
