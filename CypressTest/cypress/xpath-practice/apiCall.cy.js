///<reference types='cypress'/>

import { basePage, getUserInformationApiCall } from "../xpathPages/tutorialsPoint";

describe("tutorialspoint site", () => {
  it("api call", () => {
    //cy.visit("https://www.tutorialspoint.com/index.htm");
    basePage();
    cy.xpath('//a[contains(., "Login")]').click();
    // cy.xpath("//a[@id='btnGoogleLogin']").click();
    // cy.xpath("//input[@type='email']").type("textcoach2.ac@gmail.com");
    // cy.xpath("//a[contains(.,'Sign Up')]").click();
    cy.xpath("//input[@placeholder='Enter User Email']").type("automationtest101@yopmail.com");
    cy.xpath("//input[@id='user_password']").type("1qaz!QAZ");
    cy.xpath("//button[@value='Login']").click();
    cy.wait(8000);
    cy.xpath(`//span[.=" Student's Dashboard"]`).should('exist').should('contain', "Student's Dashboard");
    
    // getUserInformationApiCall();
    
  });
});
