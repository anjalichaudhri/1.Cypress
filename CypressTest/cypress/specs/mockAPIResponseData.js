///<reference types="cypress"/>
import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("visit site", function () {
  it("Mock API data", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // cy.intercept(requestObject, responseObject);

    // to mock your response - use this structure
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [{ book_name: "null", isbn: "SPY40", aisle: "2529857" }],
      }
    ).as("bookResponse");
    cy.xpath("//button[contains(.,'Virtual Library')]").click();
    cy.wait("@bookResponse").then(({request, response}) => {
        // cy.log("request ", request.method);
        cy.xpath("//tr").should("have.length", response.body.length+1);
    });
    cy.xpath("//p[contains(.,'Oops only 1 Book available')]")
      .should("exist")
      .should("have.text", "Oops only 1 Book available");  

  });
});
