///<reference types="cypress"/>
import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("visit site", function () {
  it("Mock API data", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // cy.intercept(requestObject, responseObject);

    // to mock your request - use this structure cy.intercept(method, url, requesthandler?)
    // to intercept security issues for api by login on the application and try to access the data from api with other user name - to check security bugs
    
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=test";
        req.continue((res) => {
          // cy.log(res.statusCode);
          //expect(res.statusCode).to.equal(404);
        });
      }
    ).as("testUrl");
    cy.xpath("//button[contains(.,'Virtual Library')]").click();
    cy.wait("@testUrl").then(({ request, response }) => {
      cy.log(request.url);
      cy.log(response.statusCode);
      expect(response.url).to.include("AuthorName=test");
      expect(response.statusCode).to.equal(404);
    });
  });
});
