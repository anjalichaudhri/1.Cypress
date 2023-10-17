///<reference types="cypress"/>

import {
    basePage,
    handleCheckbox,
    handleDisappearingDropdowns,
    handleStaticDropDown,
  } from "../xpathPages/flipkartPlus";
  
  // import { loginAsSchoolAdmin } from "../pages/loginPage";
  //cypress - Spec i.e. test
  describe("xpath practice flipkart", function () {    
    it("create xpath for static dropdowns", function () {
      cy.visit("https://www.flipkart.com/");
      cy.xpath("//div[contains(text(),'Appliances')]").click();
      cy.wait(3000);
      handleDisappearingDropdowns();
      cy.wait(5000);
      handleStaticDropDown("Max");
      cy.wait(4000);
      handleCheckbox();
      
      cy.wait(1000);
    });
  });
  