import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('Open Ecommerce page', function() {
    cy.visit(Cypress.env("angularPracticeUrl")); // to get cypress environment variable
})

When('I add items to the cart', function() {
    cy.xpath("//a[contains(@href,'/angularpractice/shop')]").click();
    // built custom commands
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element);
        
    });
    // cy.selectProduct("Blackberry");
    // cy.selectProduct("Nokia Edge");
    // parameterize test with multiple data sets
    //click checkout button
    cy.xpath("//a[contains(., 'Checkout')]").click().wait(1000);
})

// and validate total price
When('Validate total price', function() {
    let totalPrice = 0;

    cy.xpath("//td[4][contains(., '₹.')]").each(($el, index, $list) => {
      const priceText = $el.text();
      cy.log(priceText);
      const splitPriceText = priceText.split(" ");
      cy.log(splitPriceText);
      totalPrice = Number(totalPrice) + Number(splitPriceText[1].trim());
      cy.log(totalPrice);      
    });

    cy.xpath("//h3//strong[contains(text(),'₹. ')]").each(($el, index, $list) => {
      const expectedTotal = $el.text();
      cy.log(expectedTotal);
      const splitExpectedTotal = expectedTotal.split(" ");
      cy.log("expected", splitExpectedTotal);      
      expect(totalPrice).to.equal(Number(splitExpectedTotal[1].trim()));
    })
})

Then('select the country submit and verify thank you', function() {
    //click on checkout button
    cy.xpath(
      "//button[@class='btn btn-success'][contains(normalize-space(),'Checkout')]"
    )
      .click()
      .wait(1000);
    cy.xpath("//input[@id='country']").type("ind");
    cy.xpath("//a[contains(normalize-space(),'India')]").click();
    // cy.pause();
    cy.xpath("//label[@for='checkbox2']").click().should("be.visible");
    cy.xpath("//input[@id='checkbox2']").should("be.checked");
    cy.xpath("//input[@value='Purchase']").click();
    cy.xpath("//div[@class='alert alert-success alert-dismissible']").should(
      "contain",
      "Thank you! Your order will be delivered in next few weeks :-)."
    );
})
let name;
When('fill the form details', function(dataTable) {
    name = dataTable.rawTable[1][0]; 
    //convert the dataTable to multi-dimensional array
    cy.xpath("(//input[@name='name'])[position()=2]").type(
        dataTable.rawTable[1][0]
      );
      cy.xpath("//select[@id='exampleFormControlSelect1']").select(
        dataTable.rawTable[1][1]
      ); 
    // cy.xpath("(//input[@name='name'])[position()=2]").type(
    //   this.data.name
    // );
    // cy.xpath("//select[@id='exampleFormControlSelect1']").select(
    //   this.data.gender
    // );    
})

Then('validate the forms behavior', function() {
    cy.xpath("(//input[@name='name'])[position()=2]").should(
      "have.value",
      name
    );
    cy.xpath("(//input[@name='name'])[1]").should("have.attr", "minlength", 2);
    cy.xpath("//input[@id='inlineRadio3']").should("be.disabled");
})

When('Select the shop page', function() {
    cy.xpath("//a[contains(@href,'/angularpractice/shop')]").click();
})
