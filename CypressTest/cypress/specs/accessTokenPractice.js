///<reference types="cypress"/>
// const cypress = require("cypress");
const neatCSV = require("neat-csv");
// import { neatCSV} from 'neat-csv';
//cypress - Spec i.e. test
describe("extract access token", function () {
  it("make a login api call to extract token from response", async () => {
    // cy.visit("https://rahulshettyacademy.com/client/auth/login");
    // cy.visit("https://rahulshettyacademy.com/client/dashboard/dash");

    // with cypress - api testing, browser testing and add cookies can be done
    // login through local storage

    // three things to remember: create custom commands
    // set environment variable
    // set local storage item
    // how to execute options for your visit method
    cy.loginApi().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    let productName;
    // traverse from parent to child
    cy.xpath("//h5//b")
      .eq(1)
      .then(function (element) {
        productName = element.text().trim();
        cy.log(productName);
      });
    cy.xpath("//button[.=' Add To Cart']").eq(1).click().wait(1000);
    cy.xpath(
      "//button[@class='btn btn-custom'][starts-with(text(),'  Cart ')]"
    ).click();
    cy.xpath("//button[.='Checkout']").click();
    cy.xpath("//input[@placeholder='Select Country']").type("ind");
    // cy.xpath("//span[normalize-space()='India']").click();
    //iterate through country names to find the desired country

    cy.xpath("//section[contains(@class, 'ta-results')]//button").each(
      ($el, index, $list) => {
        cy.log($el.text());
        const country = $el.text();
        if ($el.text().trim() === "India") {
          cy.log("here");
          cy.wrap($el).click();
        }
      }
    );

    cy.xpath("//a[normalize-space()='Place Order']").click();
    cy.wait(7000);

    let orderId;
    cy.xpath("//label[@class='ng-star-inserted']").then((element) => {
      orderId = element.text().trim().split(" ")[1];
      cy.log(orderId);
    });

    cy.xpath(
      "//button[contains(., 'Click To Download Order Details in CSV')]"
    ).click();

    // pass the csv file as text format - neatCSV() will create javascript object for it.
    //currently we have csv file in downloads folder and we need to convert the content of
    // the file into text format. - cy.readFile() function in cypress
    //send the text to the function given below.
    // to generate path dynamically - Cypress.config("fileServerFolder")
    // in neat-csv package documentation, it is recommended to use async await with the function
    cy.wait(8000);
    cy.readFile(
      Cypress.config("fileServerFolder") +
        // + "/cypress/downloads/order-invoice_automationtest101.csv"
        "/cypress/downloads/order-invoice_automationtest101.csv"
    ).then(async (text) => {
      const csv = await neatCSV(text);
      cy.log(csv[0]);
      // whenever there is a space in proprty name use this approach to access.
      console.log(csv[0]);
      expect(productName).to.equal(csv[0]["Product Name"]);
      expect(orderId).to.equal(csv[0]["Invoice Number"]);
    });
  });
});
