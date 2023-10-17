export function basePage() {
  cy.visit("https://selectorshub.com/");
}

export function navigateToAutoTestDataPage() {
  cy.xpath(
    "//a[normalize-space()='PracticePage']/ancestor::ul//a[contains(normalize-space(),'Products')]"
  ).trigger("mouseover");
  cy.xpath("//a[.='AutoTestData']/ancestor::ul[@class='sub-menu']//a[.='AutoTestData']").click({force:true});
  cy.wait(100000);
  cy.xpath("//a[contains(.,'PracticePage')]").click();
  //   cy.xpath(
  //     "//a[normalize-space()='Courses']/ancestor::ul//a[contains(normalize-space(),'Products')]"
  //   ).invoke("show").click();
  cy.wait(100);
  //   cy.xpath("//a[normalize-space()='AutoTestData']").click();
}

export default { basePage };
