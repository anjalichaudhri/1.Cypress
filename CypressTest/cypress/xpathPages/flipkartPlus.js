export function basePage() {
  cy.visit("https://www.flipkart.com/plus");
}

export function handleStaticDropDown(value) {
  // another xpath: //select/parent::div[contains(@class,'_3uDYxP')]//select
  cy.xpath(
    "//div[contains(@class,'_3uDYxP')]//select[@class='_2YxCDZ']"
  ).select(value);
  // In static dropdown we can directly select the option by passing the value in select function.
}

export function handleCheckbox() {
  cy.xpath("//input[@placeholder='Search Brand']").type("v");
  // another xpath: //div[@title='TCL']//div//label//input[@type='checkbox']
  // since there were many inputs with type checkbox so navigated to its parent to uniquely identify the element.
  // at last removed extra parents which were not making any difference
  // final path: //div[@title='TCL']//input[@type='checkbox']
  cy.wait(2000);
  cy.xpath("//div[@class='_2pBqj6']/following-sibling::div").click({
    multiple: true,
  });
  //cy.xpath("//div[@title='TCL']//input[@type='checkbox']").should("be.checked");
  // In static dropdown we can directly select the option by passing the value in select function.

  cy.wait(10000);
  //capacity checkboxes
  cy.xpath("//div[contains(text(),'Capacity')]")
    // .trigger('click')
    .as('capacity')
    .click();
    cy.wait(4000);
    // cy.get('@capacity')
    cy.xpath(
      "//div[contains(text(),'Capacity')]/ancestor::section//div[@class='_2d0we9']//label"
    )
    .click({ multiple: true });

  cy.wait(30000);
  //cy.xpath("//div[contains(text(),'Capacity')]").click();
  // cy.xpath("//div[contains(text(),'Capacity')]/ancestor::section//div[@class='_2d0we9']/div").click({multiple: true});
}

export function handleDisappearingDropdowns() {
  // workaround for hover is using invoke(), trigger() or click({force: true})
  //when element is not shown when you clicked or for hidden elements
  cy.xpath("//span[text()='TVs & Appliances']").trigger("mouseover");
  cy.xpath("//a[@title='Washing Machine']").click();
  cy.wait(8000);
  cy.xpath("//div[text()='Reviews for Popular Washing Machines']")
    .should("exist")
    .should("contain", "Reviews for Popular Washing Machines");
}

export default {
  basePage,
  handleDisappearingDropdowns,
  handleStaticDropDown,
  handleCheckbox,
};
