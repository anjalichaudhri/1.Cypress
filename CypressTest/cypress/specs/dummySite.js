describe("visit Dummy site", function () {
  it("first test", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //cy.get(".search-keyword").type("testing");
    //cy.wait(2000);
    cy.get(".product").should("have.length", 31);
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        console.log(vegText);
        if (vegText.includes("Cashews")) {
          console.log(vegText, $el.find("button"));
          cy.wrap($el).find("button").contains("ADD TO CART").click();
        }
      });
    // grab the logo of the website - handle promise manually
    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });
  });
});
