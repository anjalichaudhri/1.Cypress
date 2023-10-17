///<reference types="cypress"/>

import {
    addEmployee,
    basePage,
    FindUser,
    login,
    EmployeeReports
  } from "../xpathPages/openSourceDemo";
  
  // import { loginAsSchoolAdmin } from "../pages/loginPage";
  //cypress - Spec i.e. test
  describe("xpath practice opensourcedemo", function () {
    it("", function () {
      basePage();
      cy.wait(1000);
      login();
      cy.wait(4000);
      cy.wait(4000);    
      EmployeeReports();
    });
  });
  