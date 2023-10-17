///<reference types="cypress"/>
import { loginAsSchoolAdmin } from "../pages/loginPage";
//cypress - Spec i.e. test
describe("visit site", function () {
  it("Mock API data", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // cy.intercept(requestObject, responseObject);

    // to make an api request - use this structure cy.request(method, url, body)
    cy.request("POST", "https://216.10.245.166/Library/Addbook.php",      
      {
        "name": "test 123",
        "isbn": "abc",
        "aisle": "23sd",
        "author": "test",
      }
    ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("Msg", "successfully added");
        cy.log("response body: ", response.body);
        expect(response.body).to.have.property("ID", "abc23sd");
    }); 

  });
});