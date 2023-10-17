///<reference types='cypress'/>
import {
  basePage,
  FindJavascriptTutorial,
  Login,
  logOut,
  OpenTermsOfUsePage,
  openXpathTutorialPage,
  ValidateDashboardPage,
} from "../xpathPages/tutorialsPoint";

describe("tutorialspoint site", () => {
  it("xpath practice 3", () => {
    basePage();
    Login();
    cy.wait(8000);
    ValidateDashboardPage();    
    openXpathTutorialPage();
    FindJavascriptTutorial();
    OpenTermsOfUsePage();    
  });
});
