export function schoolSiteBasePage() {
  cy.visit("https://glschool-test.grapecitydev.com/");
  // cy.get('#LoginId').type("mytestuser2.ac@outlook.com")
  // cy.get('#Password').type("1qaz!QAZ")
  // cy.get('#btn-submit').click()
}

export default { schoolSiteBasePage };
